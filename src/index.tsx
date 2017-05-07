import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as ReactGA from 'react-ga';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

ReactGA.initialize('UA-98695951-1');
ReactGA.pageview('/main');
