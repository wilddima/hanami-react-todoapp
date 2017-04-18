import axios from 'axios'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST'
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE'
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'

export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addTodo = (text) => { 
  return { type: ADD_TODO, text } 
}

export const toggleTodo = (id) => { 
  return { type: TOGGLE_TODO, id } 
}

export const setVisibilityFilter = (filter) => { 
  return { type: SET_VISIBILITY_FILTER, filter } 
}

export const fetchTodos = () => {
  return((dispatch) => {
    dispatch(fetchTodosRequest())

    axios.get('/api/v1/todos')
         .then((res) => { dispatch(fetchTodosSuccess(res)) })
         .catch((err) => { dispatch(fetchTodosFailure(err)) })
  })
}

export const fetchTodosRequest = () => {
  return { type: FETCH_TODOS_REQUEST }
}

export const fetchTodosSuccess = (res) => {
  return { type: FETCH_TODOS_SUCCESS, response: res.data }
}

export const fetchTodosFailure = (err) => {
  return { type: FETCH_TODOS_FAILURE, error: err }
}