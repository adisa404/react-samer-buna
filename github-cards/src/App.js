import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';

class App extends Component {
  state = {};
  render() {
    const testData = [
      {
        name: 'Dan Abramov',
        avatar_url: 'https://avatars0.githubusercontent.com/u/810438?v=4',
        company: '@facebook',
      },
      {
        name: 'Sophie Alpert',
        avatar_url: 'https://avatars2.githubusercontent.com/u/6820?v=4',
        company: 'Humu',
      },
      {
        name: 'Sebastian Markbåge',
        avatar_url: 'https://avatars2.githubusercontent.com/u/63648?v=4',
        company: 'Facebook',
      },
    ];
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Card data={testData[0]} />
        <Card data={testData[1]} />
      </div>
    );
  }
}

export default App;
