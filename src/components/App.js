import React, { Component } from 'react';
import './App.css';

import Hello from './components/Hello';

class App extends Component {

  render() {
    return (
      <div className="landing-page">
        <Hello/>
      </div>
    );
  }
}


export default App;

//npm run deploy to add it to github
