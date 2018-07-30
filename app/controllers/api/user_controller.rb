class Api::UserController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def create
    @user = User.new(user_params)
    if @user.save
      UserNotifier.send_signup_email(@user).deliver
    else
      render :action => 'new'
    end
  end
  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:name, :email, :address, :city, :state, :zip, :phone)
    end
end
