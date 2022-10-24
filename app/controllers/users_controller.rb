class UsersController < ApplicationController

    def index 

    end 

    def create
        @user = User.new(user_params)
        if @user.save 
            redirect_to employers_url 
        else 
            render :index 
        end
    end


    private 

    def user_params 
        params.require(:user).permit(:first_name, :last_name, :email, :phone_number, :nick_name)
    end
end
