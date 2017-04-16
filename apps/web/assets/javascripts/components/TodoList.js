import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => {
  return(
    <ul>
      {todos.map((todo, id) => 
        <Todo 
          key={id}
          {...todo}
          onClick={() => onTodoClick(id)}
        />
      )}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    // id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}


export default TodoList