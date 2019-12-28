import React, { Component } from 'react';

class Card extends Component {
  state = {};
  render() {
    const { avatar_url, name, company } = this.props;
    return (
      <div className="github-profile">
        <img src={avatar_url} />
        <div className="info">
          <div className="name">{name}</div>
          <div className="company">{company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
