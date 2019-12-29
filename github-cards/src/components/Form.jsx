import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  state = { userName: '' };
  handleSubmit = async event => {
    event.preventDefault();
    const result = await axios.get(
      `https://api.github.com/users/${this.state.userName}`,
    );
    this.props.onSubmit(result.data);
    this.setState({ userName: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="GitBub Username"
          onChange={event => this.setState({ userName: event.target.value })}
          value={this.state.userName}
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;
