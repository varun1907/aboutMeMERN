import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Contacts from './components/Contacts.js';
import IndividualProject from './components/IndividualProject';
import Cameras from './components/Cameras';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>

    <div>
      <Route exact path="/" component={About}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/skills" component={Skills}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/projects/:id" component={IndividualProject}/>
      <Route exact path="/contacts" component={Contacts}/>
      <Route exact path="/camera" component={Cameras}/>

    </div>

  </Router>
    );
  }
}
export default App;
