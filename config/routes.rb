Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :listings, only: [:index, :show] do
      resources :bookings, only:[:create]
    end
    resources :bookings, only:[:show]
    resources :users, only:[:create, :show] do
      resources :bookings, only:[:index]
    end
    resource :session, only:[:create, :destroy]
  end
  
end
