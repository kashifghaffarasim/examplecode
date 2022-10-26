class EmployersController < ApplicationController

    def index 

    end 

    def create 
        @employer = Employment.new(employer_params)
        if @employer.save 
           
        else
          
        end
    end 

    private 

    def employer_params 
        params.require(:employer).permit(:employer, :start_date, :end_date)
    end 
end
