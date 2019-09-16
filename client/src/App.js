import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import axios from "axios";

import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./layouts/Header";
import About from "./pages/About";

import "./App.css";

class App extends Component {
  state = {
    todos: []
  };

  toggleCompleted = async id => {
    try {
      await axios.put(`http://localhost:5000/api/todos/${id}`, {
        completed: !this.state.todos.filter(todo => todo._id === id)[0]
          .completed
      });
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo._id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      });
    } catch (err) {
      throw err;
    }
  };

  addTodo = async title => {
    try {
      const response = await axios.post(`http://localhost:5000/api/todos`, {
        title
      });
      this.setState({
        todos: [...this.state.todos, response.data]
      });
    } catch (err) {
      throw err;
    }
  };

  deleteTodo = async id => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      this.setState({
        todos: [...this.state.todos.filter(todo => todo._id !== id)]
      });
      console.log(this.state.todos);
    } catch (err) {
      throw err;
    }
  };

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:5000/api/todos");
      this.setState({
        todos: response.data
      });
    } catch (err) {
      throw err;
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <div className="page">
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    toggleCompleted={this.toggleCompleted}
                    deleteTodo={this.deleteTodo}
                  />
                </div>
              )}
            ></Route>
            <Route path="/about" component={About}></Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
