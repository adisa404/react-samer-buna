import React from 'react';
import Card from './Card';

const CardList = props => {
  const { profiles } = props;
  return (
    <div>
      {profiles.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardList;
