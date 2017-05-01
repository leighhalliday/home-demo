Rails.application.routes.draw do
  root to: "houses#index"
  devise_for :users

  resources :houses, only: [:new, :show, :create] do
    collection do
      get :featured
      get :search
    end
  end
end
