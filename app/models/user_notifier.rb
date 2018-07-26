class UserNotifier < ActionMailer::Base
  default :from => 'buckettobeak@gmail.com'

  layout "mailer"

  def send_signup_email(user)
    @user = user
    mail( :to => @user.email,
    :subject => 'Welcome to Bucket To Beak <%= @user.name %>',
    :body => 'Once you complete the payment process, you will be fully signed up for our Drop in the Bucket Plan where you can start making a difference in the environment.

    If you have any questions, please just send me an email and I should be able to get back to you within 24-48 hours.

    Thanks for joining and have a great day!'
  )
  end
end
