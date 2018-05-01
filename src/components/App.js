import React, { Component } from 'react';
import './App.css';

import Tittle from './components/Tittle';
import Panel from './components/DescriptionPanel';

class App extends Component {

  render() {
    return (
      <div>
        <div className='rows'>
          <div className='row'><Tittle /></div>
          <div className='row'><Panel /></div>
        </div>
      </div>
    );
  }
}


export default App;

//npm run deploy to add it to github
