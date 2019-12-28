import React from 'react';
import Card from './Card';

const CardList = props => {
  const { profiles } = props;
  return (
    <div>
      {profiles.map((card, index) => (
        <Card {...card} />
      ))}
    </div>
  );
};

export default CardList;
