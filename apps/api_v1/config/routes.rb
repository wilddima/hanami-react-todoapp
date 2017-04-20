resources :todos, only: [:index, :create] do
  member do
    get :toggle
  end
end
