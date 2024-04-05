Rails.application.routes.draw do

  scope '/api' do
    
    
    
    resources :users do
    end
    
    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
    get "/me", to: "sessions#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    post '/create', to: 'sessions#new'
    
    post "/validate", to: "tokens#validate"
    post "/forgot", to: "tokens#create"
    post "/reset", to: "tokens#reset"
    
    # Defines the root path route ("/")
    root "application#index"
  end
  get '*path', to: 'application#react', constraints: -> (req) { !req.xhr? && req.format.html? }
end
