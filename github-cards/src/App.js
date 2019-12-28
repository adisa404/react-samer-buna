import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Card />
      </div>
    );
  }
}

export default App;
