class ApplicationController < ActionController::API
    include ActionController::Cookies
    # skip_before_action :verify_authenticity_token
    # before_action :authorized, except: [:index, :react]
  
    def index
      # render file: "public/api.html"
      render json: {message: "Hello World from Ecoblazz server"}, status: 200
    end
  
    # def react
    #   render file: "public/index.html"
    # end
  
end
