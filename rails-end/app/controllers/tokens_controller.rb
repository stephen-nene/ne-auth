
  class TokensController < ApplicationController
  before_action :set_user, only: [:create,:reactivate]
  before_action :find_token_and_user, only: [:validate, :reset,:activate_account]


  def activate_account
    if @user && @token && @token.expires_at > Time.now
      @user.update_columns(status: :active)
      render json: { user: @user, message: "Account activated successfully." }
    else
      render json: { error: "Invalid or expired activation token." }, status: :unprocessable_entity
    end
  end
  

  # validate
  def validate
    if @token && @token.expires_at > Time.now
      # Token is valid, allow the user to reset the password
      user = @token.user
      render json: { message: "valid password reset token for #{user.username} ", email: "#{user.email}" }
    else
      render json: { error: "The reset link used is invalid Invalid or expired token." }, status: :unprocessable_entity
    end
  end
  

  # update pasword also
  def reset
    if @token && @token.expires_at > Time.now
      # Token is valid, allow the user to reset the password
      if @user.update(password: params[:password])
        # Password update was successful, now invalidate the token by setting its expiration date to the past.
        @token.update(expires_at: Time.now)
        render json: { message: "Password reset successful.",user: @user}
      else
        render json: { error: "Password update failed." }, status: :unprocessable_entity
      end
    else
      render json: { error: "Invalid or expired token." }, status: :unprocessable_entity
    end
  end
  
  def create
    if @user
      existing_tokens = @user.tokens
                            .where("expires_at > ?", Time.now)
                            .to_a

      if existing_tokens.any?
        # Token already exists, send the appropriate message as JSON
        render json: { message: 'An email with instructions has already been sent to your inbox, Please check it. ' }
      else
        # No existing token was found, generate and save a new one
        token = generate_reset_token(@user)
        
        if token
          url = "https://ne-auth.vercel.app/reset/#{token}"

          # Send the password reset email with the link containing the token
          TokenMailer.reset_password_email(@user, url).deliver_now

          render json: { message: "Reset link has been sent to your email", token: token }, status: :accepted
        else
          render json: { error: "Failed to create a new token." }, status: :unprocessable_entity
        end
      end
    else
      render json: { error: "No Account for #{params[:email]}" }, status: :not_found
    end
  end

  def reactivate
    if @user
      UserMailer.welcome_email(@user).deliver_now
      render json: { message: "Activation email sent successfully" }, status: :ok
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end
  
  
  private

  def set_user
    @user = User.find_by(email: params[:email])
  end
  

  def find_token_and_user
    user_id = params[:id]
    token = params[:token]
    @token = Token.find_by(token: token)
    @user = @token&.user
  end

  def generate_reset_token(user)
    token = SecureRandom.urlsafe_base64(32)
    Token.create(user: user, token: token, expires_at: 20.minutes.from_now)
    token
  end

  def send_password_reset_email(user, token)
    # Send an email with a link containing the reset_token.
    # You can use a mailer for this purpose.
  end
end