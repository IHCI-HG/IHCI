
import React, { Component } from 'react'


export default class Todo extends Component {
  render() {
    return (
      <li>
        {this.props.text}
      </li>
    )
  }
}

