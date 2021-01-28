import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ChildComponent from './components/ChildComponent'

let arr = [1,2,3,4]

ReactDOM.render(
    <App data={arr} />
    <ChildComponent />,
  document.getElementById('root')
);

