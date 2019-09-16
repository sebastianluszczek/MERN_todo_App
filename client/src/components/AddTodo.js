import React, { Component, Fragment } from "react";

export default class AddTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          onChange={this.onChange}
          value={this.state.title}
          placeholder="Add todo item"
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}
