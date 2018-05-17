import React, { Component }  from 'react';
import Typing from 'react-typing-animation';
// import ReactRevealText from 'react-reveal-text';
import Fade from 'react-reveal/Fade';

import '../css/Tittle.css';

import GithubImg from '../../assets/images/github.svg'
import FacebookImg from '../../assets/images/facebook.svg'
import LinkedInImg from '../../assets/images/linkedin.svg'
import MailImg from '../../assets/images/minutemailer.svg'

class Tittle extends Component {


  render(){

      const completeStyle = {
        margin: '85px',
        padding: '85px',
        textAlign: 'left',
        fontFamily: 'Verdana',
        borderWidth: '0px',
        borderStyle: 'solid'
      }

      const helloStyle = {
        fontSize: '125px'
      };

      const descStyle = {
        fontSize: '37px'
      };

      const downloadStyle = {
        fontSize: '20px',
        color: 'black',
        paddingTop: '20px'
      };

      const iconStyle = {
        paddingTop: '20px'
      };


      const downloadDelay = 5700;
      const iconDelay = 6200;

      return (
        <div style={completeStyle}>
          <div style={helloStyle}>
            <Typing speed={100}>
              <Typing.Delay ms={1000}/>
              <span>H</span>
              <Typing.Speed ms={50}/>
              <span>ello! </span>
            </Typing>

            <Typing>
              <Typing.Speed ms={25}/>
              <Typing.Delay ms={1700}/>
              <span>I </span>
              <Typing.Speed ms={50}/>
              <span>am </span>
              <span>Joel</span>
            </Typing>
          </div>
          <div style={descStyle}>
            <Typing speed={25}>
              <Typing.Delay ms={3000}/>
              <span>Software Developer & Designer</span>
            </Typing>
          </div>

          <div style={downloadStyle}>
            <Typing speed={25}>
              <Typing.Delay ms={downloadDelay}/>
              <a href="assets/files/resume_joelzeng.pdf" download="resume_joelzeng.pdf">Download my pdf resume here</a>
            </Typing>
          </div>
          <div className="iconBlock">
            <Fade
              delay={iconDelay}
            >
              <div style={iconStyle}>
                <a href="https://github.com/joelzeng">
                  <img src={GithubImg} alt="GithubLink" height="42" width="42" hspace="10"></img>
                </a>
              </div>
            </Fade>
            <Fade
              delay={iconDelay+100}
            >
              <div style={iconStyle}>
                <a href="https://www.linkedin.com/in/joel-zeng-094360107/">
                  <img src={LinkedInImg} alt="LinkedInLink" height="42" width="42"></img>
                </a>
              </div>
            </Fade>
            <Fade
              delay={iconDelay+200}
            >
              <div style={iconStyle}>
                <a href="https://www.facebook.com/joelzeng">
                  <img src={FacebookImg} alt="FacebookLink" height="42" width="42" hspace="10"></img>
                </a>
              </div>
            </Fade>
            <Fade
              delay={iconDelay+300}
            >
              <div style={iconStyle}>
                <a href="mailto:joelzeng@hotmail.com">
                  <img src={MailImg} alt="email" height="42" width="42"></img>
                </a>
              </div>
            </Fade>
          </div>
        </div>
      );
  }
}
export default Tittle;
