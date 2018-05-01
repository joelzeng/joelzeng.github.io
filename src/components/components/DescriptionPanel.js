import React, { Component }  from 'react';
import Typing from 'react-typing-animation';
import ReactRevealText from 'react-reveal-text';

import Fade from 'react-reveal/Fade';


import JavaScriptImg from '../../assets/images/javascript.svg'
import PythonImg from '../../assets/images/python.svg'
import CImg from '../../assets/images/codecademy.svg'
import Adobe1Img from '../../assets/images/adobephotoshop.svg'
import Adobe2Img from '../../assets/images/adobelightroom.svg'
import Adobe3Img from '../../assets/images/adobeindesign.svg'
import DimsumImg from '../../assets/images/dimsum.svg'
import TeaImg from '../../assets/images/tea.svg'
import TacoImg from '../../assets/images/taco.svg'
import HorizonImg from '../../assets/images/horizon.png'
import UwaterlooImg from '../../assets/images/uwaterloo.jpg'
import Photo from '../../assets/images/photo.jpg';

import '../css/DescriptionPanel.css';

const globalDelay = 200;

function Skills(props) {
  var { showit } = props;

  const iconSize = 70;

  const style = {
    borderWidth: '0px',
    borderStyle: 'solid',
    pointerEvents:'none',

    position: 'fixed',
    right: '10%',
    top: '15%',
    padding: '0',
    fontSize: '25px',
    textAlign: 'center',
    fontFamily: 'Verdana'
  }

  const boldStyle = {
    fontSize: '25px',
    textAlign: 'center',
    fontFamily: 'Verdana',
    fontWeight: '500'
  }


  return (
    <div style={style}>
      <Fade
        when={showit}
        delay={globalDelay}
      >
        <p><b>Development</b></p>
          <div className='developmentBlock'>
            <div className="img-with-text">
              <img src={PythonImg} alt="Python" height={iconSize} width={iconSize}/>
              <p align="center">Python</p>
            </div>
            <div className="img-with-text">
              <img src={JavaScriptImg} alt="Javascript" height={iconSize} width={iconSize} />
              <p align="center">JavaScript</p>
            </div>
            <div className="img-with-text">
              <img src={CImg} alt="C & C++" height={iconSize} width={iconSize}/>
              <p align="center">C & C++</p>
            </div>
          </div>

        <p><b> Design </b></p>
        <div className='designBlock'>
          <div className="img-with-text">
            <img src={Adobe1Img} alt="Photo" height={iconSize} width={iconSize}></img>
            <p align="center">Photoshop</p>
          </div>
          <div className="img-with-text">
            <img src={Adobe2Img} alt="Light" height={iconSize} width={iconSize}></img>
            <p align="center">LightRoom</p>
          </div>
          <div className="img-with-text">
            <img src={Adobe2Img} alt="Light" height={iconSize} width={iconSize}></img>
            <p align="center">InDesign</p>
          </div>
        </div>

        <p><b> Languages </b></p>
        <div className='languageBlock'>
          <div className="img-with-text">
            <img src={TacoImg} alt="Photo" height={iconSize} width={iconSize}></img>
            <p align="center">Spanish</p>
          </div>
          <div className="img-with-text">
            <img src={TeaImg} alt="Light" height={iconSize} width={iconSize}></img>
            <p align="center">English</p>
          </div>
          <div className="img-with-text">
            <img src={DimsumImg} alt="Light" height={iconSize} width={iconSize}></img>
            <p align="center">Chinese</p>
          </div>
        </div>

      </Fade>
    </div>
  );
}

function Experience(props) {
  var { showit } = props;

  const iconSize = 70;

  const style = {
    borderWidth: '0px',
    borderStyle: 'solid',
    pointerEvents:'none',

    position: 'fixed',
    right: '10%',
    top: '25%',
    padding: '0',
    fontSize: '25px',
    textAlign: 'center',
    fontFamily: 'Verdana'
  }

  const boldStyle = {
    fontSize: '25px',
    textAlign: 'center',
    fontFamily: 'Verdana',
    fontWeight: '500'
  }


  return (
    <div style={style}>
      <Fade
        when={showit}
        delay={globalDelay}
      >

      <div className="img-with-text" id='Uwaterloo'>
        <img src={UwaterlooImg} alt="Uwaterloo" height={150} width={400}/>
        <p align="center">Computer Science Student</p>
      </div>

      <div className="img-with-text">
        <img src={HorizonImg} alt="Horizon" height={iconSize} width={400}/>
        <p align="center">Software Developer Intern</p>
      </div>

      </Fade>
    </div>
  );
}

function Project(props) {
  var { showit } = props;

  const iconSize = 70;

  const style = {
    borderWidth: '0px',
    borderStyle: 'solid',
    pointerEvents:'none',

    position: 'fixed',
    right: '11.5%',
    top: '35%',
    padding: '0',
    // fontSize: '25px',
    // textAlign: 'center',
    // fontFamily: 'Verdana'
  }

  const styleOne = {
    fontSize: '30px',
    textAlign: 'center',
    fontFamily: 'Verdana',
    fontWeight: '500'
  }

  const styleTwo = {
    fontSize: '25px',
    textAlign: 'center',
    fontFamily: 'Verdana',
  }


  return (
    <div style={style}>
      <Fade
        when={showit}
        delay={globalDelay}
      >
        <div style={styleOne}>
          <p> Does this count as a project? </p>
        </div>
        <div style={styleTwo}>
          <p> More coming soon </p>
        </div>
      </Fade>
    </div>
  );
}

function Me(props) {
  var { showit } = props;

  const iconSize = 70;

  const style = {
    borderWidth: '0px',
    borderStyle: 'solid',
    pointerEvents:'none',

    position: 'fixed',
    right: '10%',
    top: '19%',
    padding: '0',
    fontSize: '25px',
    textAlign: 'center',
    fontFamily: 'Verdana'
  }

  const boldStyle = {
    fontSize: '25px',
    textAlign: 'center',
    fontFamily: 'Verdana',
    fontWeight: '500'
  }

  return (
    <div style={style}>
      <Fade
        when={showit}
        delay={globalDelay}
      >
        <img src={Photo} alt="Me" height={500} width={400}/>
      </Fade>
    </div>
  );
}


class DescriptionPanel extends Component {

  constructor() {
    super();
    this.state = {
      show: true,
      showSkills: false,
      showExperience: false,
      showProject: false,
      showMe: false,
      startUp: 4000,
      extra1: 0,
      extra2: 100,
      extra3: 200,
      extra4: 300,
      flag: false
    };
    this.onMouseEnterSkills = this.onMouseEnterSkills.bind(this);
    this.onMouseEnterExperience = this.onMouseEnterExperience.bind(this);
    this.onMouseEnterProject = this.onMouseEnterProject.bind(this);
    this.onMouseEnterMe = this.onMouseEnterMe.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  // componentDidUpdate() {
  //   console.log("------------------");
  //   console.log("current State");
  //   console.log("show: " +this.state.show);
  //   console.log("showSkills: " +this.state.showSkills);
  //   console.log("showExperience: " +this.state.showExperience);
  //   console.log("showProject: " +this.state.showProject);
  //   console.log("showMe: " +this.state.showMe);
  // }


  // Skills handler
  onMouseEnterSkills() {
    this.setState({
      show: false,
      showSkills: true,
      showExperience: false,
      showProject: false,
      showMe: false,
      startUp: 0,
      extra1: 0,
      extra2: 100,
      extra3: 200,
      extra4: 300,
      flag: true
    });
    console.log("enter skills")
  }

 // Experience handler
 onMouseEnterExperience() {
   this.setState({
     show: false,
     showSkills: false,
     showExperience: true,
     showProject: false,
     showMe: false,
     startUp: 0,
     extra1: 100,
     extra2: 0,
     extra3: 200,
     extra4: 300,
     flag: true
   });
   console.log("enter experience")
 }


// Projects handler
onMouseEnterProject() {
  this.setState({
    show: false,
    showSkills: false,
    showExperience: false,
    showProject: true,
    showMe: false,
    startUp: 0,
    extra1: 300,
    extra2: 200,
    extra3: 0,
    extra4: 100,
    flag: true
  });
  console.log("enter project")
}

// Projects handler
onMouseEnterMe() {
  this.setState({
    show: false,
    showSkills: false,
    showExperience: false,
    showProject: false,
    showMe: true,
    startUp: 0,
    extra1: 300,
    extra2: 200,
    extra3: 100,
    extra4: 0,
    flag: true
  });
  console.log("enter me")
}

onMouseLeave() {
  this.setState({
    flag: false
  });

  setTimeout(() => {
    if (!this.state.flag) {
        console.log("ENTERED");
          this.setState({
            show: true,
            showSkills: false,
            showExperience: false,
            showProject: false,
            showMe: false,
          });
        }
  }, 300);
    console.log("MAIN MENU")
}


  render(){

      const completeStyle = {
        borderWidth: '0px',
        borderStyle: 'solid',

        padding :'10px',
        top: '220px',
        right: '12%',
        position: 'fixed',

        fontSize: '65px',
        textAlign: 'center',
        fontFamily: 'Verdana',
      };

      return (
        <div style={completeStyle} >
          <div onMouseEnter={this.onMouseEnterSkills}
               onMouseLeave={this.onMouseLeave}
               className="skills"
               >
            <Fade right
              delay={this.state.startUp + this.state.extra1}
              appear={true}
              enter={this.state.show}
              exit={!this.state.show}
              in={this.state.show}
            >
              <p>Skills</p>
            </Fade>
          </div>


          <div onMouseEnter={this.onMouseEnterExperience}
               onMouseLeave={this.onMouseLeave}
               className="experience"
               >
            <Fade right
              delay={this.state.startUp + this.state.extra2}
              appear={true}
              enter={this.state.show}
              exit={!this.state.show}
              in={this.state.show}
            >
              <p>Experience </p>
            </Fade>
          </div>

          <div onMouseEnter={this.onMouseEnterProject}
               onMouseLeave={this.onMouseLeave}
               className="project"
               >
            <Fade right
              delay={this.state.startUp + this.state.extra3}
              appear={true}
              enter={this.state.show}
              in={this.state.show}
            >
              <p>Projects</p>
            </Fade>
          </div>

          <div onMouseEnter={this.onMouseEnterMe}
               onMouseLeave={this.onMouseLeave}
               className="me"
               >
            <Fade right
              delay={this.state.startUp + this.state.extra4}
              appear={true}
              enter={this.state.show}
              in={this.state.show}
            >
              <p>Me</p>
            </Fade>
          </div>

          <Skills showit={this.state.showSkills}></Skills>
          <Experience showit={this.state.showExperience}></Experience>
          <Project showit={this.state.showProject}></Project>
          <Me showit={this.state.showMe}></Me>


        </div>

      );
  }
}
export default DescriptionPanel;
