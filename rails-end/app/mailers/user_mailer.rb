class UserMailer < ApplicationMailer
  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: "Welcome to Authh")
  end

  def change_password(user)
    @url = 'http://localhost:1420/forgot'
    @user = user
    mail(to: @user.email, subject: "Security risk for your account")
  end
end
