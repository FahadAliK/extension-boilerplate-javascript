import React from 'react';
import ReactDOM from 'react-dom';
import './contentScript.scss';

const App = () => {
  return <div className='App'></div>;
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
