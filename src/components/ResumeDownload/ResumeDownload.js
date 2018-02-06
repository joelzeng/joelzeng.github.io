import React, { Component } from 'react';
import profile from '../../assets/images/simpleprofile-white.png';
import './ResumeDownload.css';

class ResumeDownload extends Component {

  render() {
    return (
      <div className='download-background'>
        <a href="assets/files/resume_joelzeng.pdf" download="resume_joelzeng.pdf">Click here to Download my resume</a>
      </div>
    );
  }
}

export default ResumeDownload;
