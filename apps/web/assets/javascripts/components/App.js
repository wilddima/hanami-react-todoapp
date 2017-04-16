import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

export default class App extends Component {
  render() {
    return (
       <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}