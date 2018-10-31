import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import Image from './Image.js';

export default class About extends Component {
  render() {
    return (

<div className="wrapStyle">
      <div className="introSection">
        <Image />
      </div>

      <div className="variableSection">
        <AppNavbar />
        <div style={{marginTop:100,color:'white',paddingLeft:30}}>
        <h1 className="intro">Varun Gupta</h1>
        </div>
        <div style={{paddingLeft:30,marginTop:20}}>
        <p style={{color:'white',fontSize:20}}>
        Hi,I am persuing Btech in Computer Science and Engineering from Graphic Era University Dehradun. I specialize in building React Native applications .
        </p>
        <p style={{color:'white',fontSize:20}}>I have done work in , mobile app development, front-end/back-end web, database management, REST api and
        MERN Stack.
        </p>
        </div>
      </div>

      </div>
    );
  }
}
