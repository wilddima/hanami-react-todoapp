import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => {
  return(
    <ul>
      {todos.entities.map((todo) => 
        <Todo 
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.shape({
    entities: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      describe: PropTypes.string,
      title: PropTypes.string.isRequired,
      finished: PropTypes.bool.isRequired,
    })),
    isFetching: PropTypes.bool.isRequired,
    errors: PropTypes.object
  }).isRequired,
  onTodoClick: PropTypes.func.isRequired
}


export default TodoList