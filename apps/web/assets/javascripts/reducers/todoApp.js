import { 
  visibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_SUCCESS
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
  state = { isFetching: false, errors: {}, data: []},
  action) => {
  switch(action.type) {
    case FETCH_TODOS_REQUEST:
      return(Object.assign({}, state, { isFetching: true }))
      return(state)
    case FETCH_TODOS_SUCCESS:
      return(
        Object.assign(
          {},
          state,
          { data: action.response.data },
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
      return(state)
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
        Object.assign(
          {},
          state,
          {
            data: state.data.map((todo, id) => {
              if(id === action.id) {
                return(Object.assign(
                  {},
                  todo,
                  { 
                    attributes: Object.assign({}, todo.attributes,
                      { 
                        finished: !todo.attributes.finished 
                      }
                    )
                  }
                ))
              }
              return(todo)
            })
          }
        )
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