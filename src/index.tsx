import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

const ReactGA = require('react-ga');
ReactGA.initialize('UA-98695951-1');