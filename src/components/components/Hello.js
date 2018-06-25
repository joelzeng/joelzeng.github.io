import React, { Component } from 'react';
import '../css/Hello.css';

/*

Before deploymentl, end development to ignore syntax coloring
- Add the apostrophe to I am in order to change it into i'm (better aesthetics)
*/
class Hello extends Component {

  render() {
    return (
      <div>
        <div className="main-background">
          <div className="hello-text">
            <p> Hello Im Joel </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Hello;
