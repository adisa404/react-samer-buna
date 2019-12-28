import React from 'react';
import Card from './Card';

const CardList = props => {
  const { data } = props;
  console.log(data);

  return (
    <div>
      {data.map((card, index) => (
        <Card {...card} />
      ))}
    </div>
  );
};

export default CardList;
