class ApplicationController < ActionController::API
    include ActionController::Cookies
    # skip_before_action :verify_authenticity_token
    # before_action :authenticate_request, except: [:index]
    
      def index
        # render file: "public/api.html"
        render json: {message: "Hello World from Ecoblazz server"}, status: 200
      end
    
      # def react
      #   render file: "public/index.html"
      # end

    private
  
    def authenticate_request
      api_key = request.headers['Authorization']
      unless api_key == ENV['087ee270ddfba2273b16e9a499be74fa']
        render json: { error: 'Unauthorized' }, status: :unauthorized
      end
    end
  
end
