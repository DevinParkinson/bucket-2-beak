class SignupController < ApplicationController

    def send_enabled_message(user)
      @user = user
      mail(:to => user.email, :subject => "Welcome to Bucket To Beak!!!")
    end

    def send_new_user_message(user)
      @user = user
      mail(:to => 'buckettobeak@gmail.com', :subject => "New User #{user} created please review and enable.")
    end

end
