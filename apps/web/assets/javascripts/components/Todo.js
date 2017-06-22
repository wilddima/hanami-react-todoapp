import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Todo = ({onClick, finished, title, id, isFetching}) => {
  // TODO: disable only current updating todo
  if (isFetching) {
    return(
      <li>
        <span
          style={{textDecoration: finished ? 'line-through' : 'none'}}
        >
          {title}
        </span>
      </li>
    )
  } else {
    return(
      <li>
        <a
          href='#'
          onClick={e => { e.preventDefault(); onClick() }}
          style={{
            textDecoration: finished ? 'line-through' : 'none'
          }}
        >
          {title}
        </a>
      </li>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  finished: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default Todo