export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

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