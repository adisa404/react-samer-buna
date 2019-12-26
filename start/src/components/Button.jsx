import React, { useState } from 'react';

function Button(props) {
  return <button onClick={props.onClickFunction}>Increase</button>;
}

export default Button;
