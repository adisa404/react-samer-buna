import React from 'react';
import { colors } from '../settings/colorTheme';

const PlayNumber = props => {
  return (
    <button
      key={props.number}
      style={{ background: colors[props.color] }}
      className='number'
      onClick={() => props.onClick(props.number, props.status)}
    >
      {props.number}
    </button>
  );
};

export default PlayNumber;
