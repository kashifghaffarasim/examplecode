class WelcomesController < ApplicationController

    def index 
        @employment = Employment.new()
    end 
end
