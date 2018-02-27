Rails.application.routes.draw do
  get 'messages' => 'messages#index'

  root :to => 'messages#index'
end
