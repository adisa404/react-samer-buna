import React from 'react';
import './App.css';
import { utils } from './utils/utils';

const App = () => {
  return <div className="App">{utils.sum([1, 3])}</div>;
};

export default App;
