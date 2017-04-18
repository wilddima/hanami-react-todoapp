import { connect } from 'react-redux'
import { toggleTodo } from '../actions/todos'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return(
        Object.assign(
          {},
          todos,
          { data: todos.data.filter(t => t.finished)}
        )
      )
    case 'SHOW_ACTIVE':
      return(
        Object.assign(
          {},
          todos,
          { data: todos.data.filter(t => !t.finished)}
        )
      )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList