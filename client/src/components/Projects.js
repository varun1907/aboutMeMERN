import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import Image from './Image.js';
import './Projects.css';
import {NavLink} from 'react-router-dom';



export default class Projects extends Component {
  
  render() {
    return (
      <div className="wrapStyle">
        <div className="introSection">
          <Image />
        </div>

        <div className="variableSection">
          <AppNavbar />
        
        
          <div className="projectContainer">
          <div style={{backgroundColor:'#28a745'}} className="projectCategory">
             <p style={{color:'white'}}>Mobile Development</p>
          </div>
          <div style={{backgroundColor:'#81c784'}} className="projectListContainer">
            <ul>
              <li><NavLink to="/projects/nexus" target="_blank" href="#">Nexus</NavLink></li>
              <li><NavLink to="/projects/projectXApp" target="_blank" href="#">ProjectXApp</NavLink></li>
              <li><NavLink to="/projects/rentpe" target="_blank" href="#">Rentpe</NavLink></li>
              <li><NavLink to="/projects/bunkPoll" target="_blank" href="#">Bunk Poll</NavLink></li>

            </ul>
          </div>
          </div>

          <div className="projectContainer">
          <div style={{backgroundColor:'#7b1fa2'}} className="projectCategory">
             <p style={{color:'white'}}>Web Development</p>
          </div>
          <div style={{backgroundColor:'#ba68c8'}} className="projectListContainer" >
            <ul>
              <li><NavLink to="/projects/portfolio" target="_blank" href="#">Portfolio</NavLink></li>
            </ul>
          </div>
          </div>

          <div className="projectContainer">
          <div style={{backgroundColor:'rgb(51, 51, 51)'}} className="projectCategory">
             <p style={{color:'white'}}>Data Analysis</p>
          </div>
          <div style={{backgroundColor:'#9e9e9e'}} className="projectListContainer">
            <ul>
              <li><NavLink to="/projects/dataAnalysis" target="_blank" href="#">Fifa Data Analysis</NavLink></li>
            </ul>
          </div>
          </div>

        </div>

      </div>
    );
  }
}
