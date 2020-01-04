import React from 'react';
import { colors } from '../settings/colorTheme';

const PlayNumber = props => {
  return (
    <button
      key={props.number}
      style={{ background: colors[props.color] }}
      className='number'
      onClick={() => console.log(props.number)}
    >
      {props.number}
    </button>
  );
};

export default PlayNumber;
