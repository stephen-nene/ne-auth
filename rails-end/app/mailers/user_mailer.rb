class UserMailer < ApplicationMailer
  def welcome_email(user)
    @user = user
    @activation_token = find_or_generate_token(@user)
    @activation_url = "https://ne-auth.vercel.app/activate/#{@activation_token}"
    mail(to: @user.email, subject: "Welcome to Authh")
  end

  def change_password(user)
    @url = 'https://ne-auth.vercel.app/forgot'
    @user = user
    mail(to: @user.email, subject: "Security risk for your account")
  end

  private

  
  def find_or_generate_token(user)
    valid_token = user.tokens.where("expires_at > ?", Time.now).last

    if valid_token
      valid_token.token
    else
      generate_token(user)
    end
  end

  def generate_token(user)
    token = SecureRandom.urlsafe_base64(32)
    Token.create(user: user, token: token, expires_at: 1.day.from_now)
    token
  end
end
