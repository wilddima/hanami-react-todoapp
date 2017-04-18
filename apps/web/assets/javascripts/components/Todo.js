import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Todo = ({onClick, finished, title, id}) => {
  return(
    <li
      onClick={onClick}
      style={{
        textDecoration: finished ? 'line-through' : 'none'
      }}
    >
      {title}
    </li>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  finished: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default Todo