# Configure your routes here
# See: http://hanamirb.org/guides/routing/overview/
#
# Example:
# get '/hello', to: ->(env) { [200, {}, ['Hello from Hanami!']] }
post '/todos', to: 'todos#create'
post '/home', to: 'home#create'
get '/todos', to: 'todos#index'
