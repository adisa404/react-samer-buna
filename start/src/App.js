import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';

function App() {
  const [counter, setCounter] = useState(5);
  const incrementCounter = () => setCounter(counter * 2);
  return (
    <React.Fragment>
      <Button onClickFunction={incrementCounter} />
      <Display message={counter} />
    </React.Fragment>
  );
}

export default App;
