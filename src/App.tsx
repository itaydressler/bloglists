import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Bloglists!</h2>
        </div>
        <p className="App-intro">
          We got started!
        </p>
      </div>
    );
  }
}

export default App;
