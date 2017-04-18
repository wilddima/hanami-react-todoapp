import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => {
  console.log(todos)
  return(
    <ul>
      {todos.data.map((todo, id) => 
        <Todo 
          key={id}
          {...todo.attributes}
          id={todo.id}
          onClick={() => onTodoClick(id)}
        />
      )}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      attributes: PropTypes.object.isRequired,
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    })),
    isFetching: PropTypes.bool.isRequired,
    errors: PropTypes.object
  }).isRequired,
  onTodoClick: PropTypes.func.isRequired
}


export default TodoList