import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import Map from './Map.js';
import Image from './Image.js';
import { Button, Form, FormGroup, Label, Input,Alert } from 'reactstrap';

export default class Contacts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:null,
      nameValid:false,
      email:null,
      emaiValid:false,
      message:null,
      messageValid:false,
      nameErrorMessage:false,
      nameMessage:null,
      emailErrorMessage:false,
      emailMessage:null,
      messageErrorMessae:false,
      messageMessage:null,
      saved:false,
      isVisible:false,
    };
  }


  handleName=(event)=>{
    let text = event.target.value;
    let nameFormat = /^[a-zA-Z\s]+$/.test(text);
    if(text === null || text.trim() === '' || nameFormat === false){
      this.setState({name: text, nameValid: false,nameErrorMessage:true,nameMessage:'Name format not correct'})
    }else{
      this.setState({name: text, nameValid: true,nameErrorMessage:false,nameMessage:null})
    }

  }
  handleEmail=(event)=>{
    let text = event.target.value;
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          let emailFormat = re.test(text);
          if(text === null || text.trim() === '' || emailFormat === false){
            this.setState({email: text, emailValid: false,emailErrorMessage:true,emailMessage:'Email format not correct'})
          }else{
            this.setState({email: text, emailValid: true,emailErrorMessage:false,emailMessage:null})
          }
      }

    handleMessage=(event)=>{
        let text = event.target.value;
        let messageFormat = /^[a-zA-Z.,!\s]+$/.test(text);
        if (text === null || text.trim() === '' || messageFormat === false) {
                this.setState({message: text, messageValid: false,messageErrorMessae:true,messageMessage:'Message format not correct'});
            }
            else {
                this.setState({message: text, messageValid: true,messageErrorMessae:false,messageMessage:null});
            }
      }
  submit=()=>{
    fetch('/api/queries',{
      method: 'POST',
      body: JSON.stringify({
        name:this.state.name,
        email:this.state.email,
        message:this.state.message
      }),
      headers:{
        'Content-type' : 'application/json'
      }
    }).then(res=>res.json())
    .then(res=>{
      if(res.success){
        this.setState({saved:true,isVisible:true,name:'',email:'',message:''});
        setTimeout(() => {
              this.setState({isVisible:false})
            }, 3000);
      }
    }).catch(err=>console.log(err));
  }
onBlurName=()=>{
  if(this.state.name===null || this.state.name===''){
    this.setState({nameErrorMessage:false})
  }else {
    this.setState({nameErrorMessage:true})
  }
}
onBlueEmail=()=>{
  if(this.state.email===null || this.state.email===''){
    this.setState({emailErrorMessage:false})
  }else {
    this.setState({emailErrorMessage:true})
  }
}
onBlurMessage=()=>{
  if(this.state.message===null || this.state.message===''){
    this.setState({messageErrorMessae:false})
  }else {
    this.setState({messageErrorMessae:true})
  }
}
  render() {
    return (

      <div className="contactWrapper">

      <div className="introSection">
        <Image />
      </div>

      <div className="variableSection">
        <AppNavbar />

        {this.state.saved && this.state.isVisible
          ?
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:20}}>
          <Alert style={{width:'60%'}} fade={true} color="success">
            This is a success alert — check it out!
          </Alert></div>
          :null}
        <div style={{marginTop:20}}>

        <Form style={{marginLeft:40,marginRight:40}}>

        <div className="row">
          <div className = "col-sm-6">
            <FormGroup>
              <Label for="name">Name(required)</Label>
              <Input value={this.state.name} onBlur={this.onBlurName} type="text" name="name" id="name" onChange={this.handleName} />
            </FormGroup>
          </div>
          <div className="col-sm-6" style={{display:'flex',alignItems:'center',marginLeft:0,paddingLeft:0}}>
            {this.state.nameErrorMessage
            ?
            <p style={{marginTop:25}}>{this.state.nameMessage}</p>
            : null}
          </div>
        </div>

        <div className="row">
          <div className = "col-sm-6">
            <FormGroup>
              <Label for="email">Email(required)</Label>
              <Input value={this.state.email} onBlur={this.onBlueEmail} type="email" name="email" id="email" onChange={this.handleEmail}/>
            </FormGroup>
          </div>
        <div className="col-sm-6" style={{display:'flex',alignItems:'center',marginLeft:0,paddingLeft:0}}>
          {this.state.emailErrorMessage
          ?
          <p style={{marginTop:25}}>{this.state.emailMessage}</p>
          : null}
        </div>
      </div>
        <FormGroup>
          <Label for="text">Message(required)</Label>
          <Input value={this.state.message} onBlur={this.onBlurMessage} type="textarea" rows={5} name="text" id="text" onChange={this.handleMessage}/>
        </FormGroup>
        {this.state.messageErrorMessae
        ?
        <p>{this.state.messageMessage}</p>
        : null}
        <div className="buttonClass">
        <Button className="buttonWidth"
        color="primary"
        disabled = {this.state.nameValid && this.state.emailValid && this.state.messageValid ? false : true }
        onClick={this.submit}>Submit</Button>
        </div>
      </Form>

        </div>

        {/* <div className="map">
        <Map/>
        </div> */}

      </div>
    </div>
    );
  }
}
