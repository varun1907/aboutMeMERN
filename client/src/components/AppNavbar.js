import React, { Component } from 'react';
import {
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom'

class AppNavbar extends Component{
  state={
    isOpen:false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render(){
    return(
      <div style={{marginTop:25}}>
      <Nav style={{justifyContent:'center',alignItems:'center'}}>
        <NavItem>
          <NavLink to="/about" activeStyle={{borderBottom:'2px solid #EF2F4F'}} style={Styles.link} href="#">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/skills" activeStyle={{borderBottom:'2px solid #EF2F4F'}} active style={Styles.link} href="#">Skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects" activeStyle={{borderBottom:'2px solid #EF2F4F'}} style={Styles.link} href="#">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contacts" activeStyle={{borderBottom:'2px solid #EF2F4F'}} style={Styles.link} href="#">Contact</NavLink>
        </NavItem>
      </Nav>
      </div>
    );
  }
}

const Styles={
  link:{
    fontWeight:'bold',
    fontSize:20,
    color:'black',
    textDecoration:'none',
    borderBottom:'2px solid white',
    ":hover": { listStyle:'none' },
    marginRight:5
  }
}

export default AppNavbar;
