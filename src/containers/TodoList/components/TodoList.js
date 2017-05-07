import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import AddTodo from "./AddTodo";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <AddTodo {...this.props}/>
        <ul>
            {this.props.todos.map((todo, index) =>
                <Todo {...todo}
                      key={index}  />
            )}
        </ul>
      </div>

    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
};