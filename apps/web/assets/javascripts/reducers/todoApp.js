import { 
  visibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO
 } from '../actions/todos'

 import { combineReducers } from 'redux'


const { SHOW_ALL } = visibilityFilters

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return(state)
  }
}

const todos = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return(
        [
          ...state, 
          {
            text: action.text,
            completed: false
          }
        ]
      )
    case TOGGLE_TODO:
      return(
        state.map((todo, id) => {
          if(id === action.id) {
            return(Object.assign(
             {},
             todo,
             { completed: !todo.completed }
            ))
          }
          return(todo)
        })
      )
    default:
      return(state)
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp