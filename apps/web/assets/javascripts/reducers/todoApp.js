import { 
  visibilityFilters,
  SET_VISIBILITY_FILTER,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_SUCCESS,
  CREATE_TODOS_REQUEST,
  CREATE_TODOS_FAILURE,
  CREATE_TODOS_SUCCESS,
  TOGGLE_TODO_REQUEST,
  TOGGLE_TODO_FAILURE
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

const todos = (
  state = { isFetching: false, errors: {}, entities: []},
  action) => {
  switch(action.type) {
    case FETCH_TODOS_REQUEST:
      return(Object.assign({}, state, { isFetching: true }))
    case FETCH_TODOS_SUCCESS:
      return(
        Object.assign(
          {},
          state,
          { entities: action.response.todos },
          { isFetching: false }
        )
      )
    case FETCH_TODOS_FAILURE:
      return(
        Object.assign(
          {},
          state,
          { 
            isFetching: false,
            errors: action.errors
          }
        )
      )
    case CREATE_TODOS_REQUEST:
      return(Object.assign({}, state, { isFetching: true }))
    case CREATE_TODOS_FAILURE:
      return(
        Object.assign(
          {},
          state,
          { 
            isFetching: false,
            errors: action.errors
          }
        )
      )
    case TOGGLE_TODO_REQUEST:
      return(Object.assign({}, state, { isFetching: true }))
    case TOGGLE_TODO_FAILURE:
      return(
        Object.assign(
          {},
          state,
          { 
            isFetching: false,
            errors: action.errors
          }
        )
      )
    // case TOGGLE_TODO:
    //   return(Object.assign(
    //       {},
    //       state,
    //       {
    //         entities: state.entities.map((todo) => {
    //           if(todo.id === action.id) {
    //             return(Object.assign(
    //               {},
    //               todo,
    //               { finished: !todo.finished }
    //             ))
    //           }
    //           return(todo)
    //         })
    //       }
    //     )
    //   )
    default:
      return(state)
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp