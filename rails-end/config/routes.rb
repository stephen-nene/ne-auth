Rails.application.routes.draw do

  scope '/api' do
    get '*path', to: 'application#index', constraints: -> (req) { !req.xhr? && req.format.html? }


  end

  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get "/me", to: "sessions#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post '/create', to: 'sessions#new'
  
  # Defines the root path route ("/")
  root "application#index"
end
