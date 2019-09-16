import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav className="header">
        <h1>MERN ToDo App</h1>
        <Link to="/">Home</Link> |<Link to="/about">About</Link>
      </nav>
    );
  }
}
