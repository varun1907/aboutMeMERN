import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
export default class Footer extends Component {
  render() {
    return (
      <div style={{marginTop:20}}>
        <SocialIcon style={{ height: 40, width: 40, marginRight:5 }} color={this.props.color} url="https://www.facebook.com/varun.gupta.3785373" />
        <SocialIcon style={{ height: 40, width: 40, marginRight:5 }} color={this.props.color} url="https://www.linkedin.com/in/varun-gupta-b7585515a" />
        <SocialIcon style={{ height: 40, width: 40, marginRight:5 }} color={this.props.color} url="https://plus.google.com/u/0/109531738164712542209" />
        <SocialIcon style={{ height: 40, width: 40, marginRight:5 }} color={this.props.color} url="https://github.com/varun1907" />
        <SocialIcon style={{ height: 40, width: 40, marginRight:5 }} color={this.props.color} url="https://www.instagram.com/varun3900/?hl=en" />
      </div>
    );
  }
}
