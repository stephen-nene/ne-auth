class UserMailer < ApplicationMailer
  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: "Welcome to Authh")
  end

  def change_password(user)
    @url = 'https://ne-auth.vercel.app/forgot'
    @user = user
    mail(to: @user.email, subject: "Security risk for your account")
  end
end
