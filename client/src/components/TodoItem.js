import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { _id, title, completed } = this.props.todo;
    return (
      <div className="item">
        <input
          type="checkbox"
          onChange={this.props.toggleCompleted.bind(this, _id)}
          checked={completed}
        />
        <h4>{title}</h4>
        <button onClick={this.props.deleteTodo.bind(this, _id)}>Delete</button>
      </div>
    );
  }
}
