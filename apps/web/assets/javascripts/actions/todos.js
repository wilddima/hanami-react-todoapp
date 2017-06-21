import axios from 'axios'

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST'
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE'
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'

export const CREATE_TODO_REQUEST = 'CREATE_TODOS_REQUEST'
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS'
export const CREATE_TODO_FAILURE = 'CREATE_TODOS_FAILURE'

export const TOGGLE_TODO_REQUEST = 'TOGGLE_TODOS_REQUEST'
export const TOGGLE_TODO_FAILURE = 'TOGGLE_TODOS_FAILURE'

export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
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

export const createTodo = (title) => {
  return((dispatch) => {
    dispatch(createTodoRequest())

    axios.post('/api/v1/todos', { todo: { title: title} })
         .then((res) => { dispatch(createTodoSuccess(res.data)) })
         .catch((err) => { dispatch(createTodoFailure(err)) })
  })
}

export const createTodoRequest = () => {
  return { type: CREATE_TODO_REQUEST }
}

export const createTodoSuccess = (todo) => {
  return { type: CREATE_TODO_SUCCESS, todo }
}

export const createTodoFailure = (err) => {
  return { type: CREATE_TODO_FAILURE, error: err }
}

export const toggleTodo = (id) => { 
  return((dispatch) => {
    dispatch(toggleTodoRequest(id))

    axios.get(`/api/v1/todos/${id}/toggle`)
         .then((res) => { dispatch(fetchTodos()) })
         .catch((err) => { dispatch(createTodoFailure(err)) })
  })
}

export const toggleTodoRequest = () => {
  return { type: TOGGLE_TODO_REQUEST }
}

export const toggleTodoFailure = (err) => {
  return { type: TOGGLE_TODO_FAILURE, error: err }
}