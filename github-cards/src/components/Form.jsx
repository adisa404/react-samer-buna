import React, { Component } from 'react';

class Form extends Component {
  state = { userName: '' };
  handleSubmit = event => {
    event.preventDefault();
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
