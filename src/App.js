import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Parallax } from 'react-parallax';
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
      <section className='development'>
        <header className='development-content'>
          <img src={logo} className='development-content-logo' alt='logo' />
          <h1 className='development-content-text'>Under development.</h1>
          <h3 className='development-content-text'>Come back later.</h3>
        </header>
        <Particles params={{
          particles: {
            number: {value: 200},
            line_linked: {enable: false}
          }
        }} />
      </section>
    );
  }
}

export default App;
