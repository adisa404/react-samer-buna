import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return <div className="header">{this.props.title}</div>;
  }
}

export default App;
