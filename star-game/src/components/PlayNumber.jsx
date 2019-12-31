import React from 'react';

const PlayNumber = props => {
  return (
    <button
      key={props.number}
      className="number"
      onClick={() => console.log(props.number)}
    >
      {props.number}
    </button>
  );
};

export default PlayNumber;
