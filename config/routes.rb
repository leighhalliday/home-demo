Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"
end
