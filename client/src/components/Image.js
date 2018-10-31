import React, { Component } from 'react';
import Footer from './Footer.js'


export default class Image extends Component {
  render() {
    return (

          <div>

            <div className="divStyle">
              <h1 style={{color:'white'}}>Hello there..!!</h1>
            </div>
            <div className="divStyle">
              <p style={{color:'white'}}>I am Varun Gupta. I am a Javascript Developer.</p>
            </div>
            <div className="divStyle">
              <img className="imgStyle" alt="profilePhoto" src={ require('../images/IMG_1341.JPG') }/>
            </div>
            <hr/>
            <div className="divStyle" style={{marginBottom:30}}>
              <Footer color="white"/>
            </div>

          </div>

    );
  }
}