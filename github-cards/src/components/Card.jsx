import React, { Component } from 'react';

class Card extends Component {
  state = {};
  render() {
    return (
      <div className="github-profile">
        <img src="https://placehold.it/100" />
        <div className="info">
          <div className="name">Name ...</div>
          <div className="company">Company ...</div>
        </div>
      </div>
    );
  }
}

export default Card;
