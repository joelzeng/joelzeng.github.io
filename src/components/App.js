import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import './App.css';
// import { Parallax } from 'react-parallax';
import Particles from 'react-particles-js';

// import Intro from './Intro/Intro';
import ResumeDownload from './ResumeDownload/ResumeDownload';
// import Footer from './Footer/Footer'

class App extends Component {
  render() {
    return (
      <section className='development'>
        <header className='development-content'>
          <img src={logo} className='development-content-logo' alt='logo' />
          <h1 className='development-content-text'>Under development.</h1>
          <h3 className='development-content-text'>Moving from Static Html to React js, Come back later.</h3>
          <ResumeDownload />
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
