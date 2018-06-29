Rails.application.routes.draw do

  namespace :api do
    resources :clients
  end
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    get '/braintree_token', to: 'braintree#token'
    post '/payment', to: 'braintree#payment'
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
