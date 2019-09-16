import React, { Component } from "react";

import TodoItem from "./TodoItem";

export default class Todos extends Component {
  render() {
    console.log(this.props.todos);
    return this.props.todos.map(todo => (
      <TodoItem
        todo={todo}
        key={todo._id}
        toggleCompleted={this.props.toggleCompleted}
        deleteTodo={this.props.deleteTodo}
      />
    ));
  }
}
