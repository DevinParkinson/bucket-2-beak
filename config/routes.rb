Rails.application.routes.draw do

  namespace :api do
    get '/braintree_token', to: 'braintree#token'
    post '/payment', to: 'braintree#payment'
  end

  namespace :api do
    resources :user
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
