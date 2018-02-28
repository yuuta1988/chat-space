Rails.application.routes.draw do
  devise_for :users
  get 'messages' => 'messages#index'

  root :to => 'messages#index'
end
