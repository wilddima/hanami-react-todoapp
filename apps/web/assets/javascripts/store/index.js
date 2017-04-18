import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import todoApp from '../reducers/todoApp'
import { fetchTodos } from '../actions/todos'

let store = createStore(
  todoApp,
  applyMiddleware(
    thunkMiddleware
  )
)

store.dispatch(fetchTodos())

export default store