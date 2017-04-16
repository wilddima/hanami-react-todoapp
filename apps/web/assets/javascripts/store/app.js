import { createStore } from 'redux'
import todoApp from '../reducers/todoApp'

let store = createStore(todoApp)

export default store