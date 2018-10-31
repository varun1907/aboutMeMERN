import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import Image from './Image.js';
import './Projects.css';
import { Card, CardTitle, CardText } from 'reactstrap';


export default class Skills extends Component {
  render() {
    return (

      <div className="skillWrapper">
            <div className="introSection">
              <Image />
            </div>

      <div className="variableSection">
        <AppNavbar />
        
        <div className="skillsCardWrapper">   
        <div className="skillsCard">
          <Card body inverse color="primary">
            <CardTitle>Languages</CardTitle>
            <CardText>C,C++,Java,Python,Javascript</CardText>
          </Card>
        </div>

        <div className="skillsCard">
          <Card body inverse color="info">
            <CardTitle>Databases</CardTitle>
            <CardText>MYSQL,SQlite,MongoDB</CardText>
          </Card>
        </div>

        <div className="skillsCard">
          <Card body inverse color="danger">
            <CardTitle>Web and Mobile Technologies </CardTitle>
            <CardText>React Native,Redux,REST APIs,MERN Stack,ReactJS,Javascript,Html,CSS,Android</CardText>
          </Card>
        </div>

        <div className="skillsCard">
          <Card body inverse color="success">
            <CardTitle>Frameworks and Libraries</CardTitle>
            <CardText>express Framework(nodejs),Django Framework(python),Bootstrap,React Native Elements(UI for react native), Native Base(UI for react native)</CardText>
          </Card>
        </div>

        <div className="skillsCard">
          <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardTitle>Tools</CardTitle>
            <CardText>Weka,Tableau,Raptor</CardText>
          </Card>
        </div>

        </div>
      </div>
      </div>
    );
  }
}
