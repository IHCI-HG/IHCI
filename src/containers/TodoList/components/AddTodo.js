import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={ () => {this.props.addTodo(this.refs.input.value.trim())} }>
          Add
        </button>
      </div>
    )
  }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};
