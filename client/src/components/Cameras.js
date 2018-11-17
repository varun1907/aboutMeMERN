import React, { Component } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';



class Cameras extends Component {

  // onTakePhoto (dataUri) {
  //   // Do stuff with the photo...
  //   console.log('takePhoto');
  // }

  // onCameraError (error) {
  //   console.error('onCameraError', error);
  // }

  // onCameraStart (stream) {
  //   console.log('onCameraStart');
  // }

  // onCameraStop () {
  //   console.log('onCameraStop');
  // }

    render() {
        return (
             <div className="App">
        <p>Hey there trying to access camera</p>
        <input type="image" accept="image/*" capture="true"/>
        {/* <Camera
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
          onCameraError = { (error) => { this.onCameraError(error); } }
          idealFacingMode = {FACING_MODES.ENVIRONMENT}
          idealResolution = {{width: 640, height: 480}}
          imageType = {IMAGE_TYPES.JPG}
          imageCompression = {0.97}
          isMaxResolution = {false}
          isImageMirror = {false}
          isDisplayStartCameraError = {true}
          sizeFactor = {1}
          onCameraStart = { (stream) => { this.onCameraStart(stream); } }
          onCameraStop = { () => { this.onCameraStop(); } }
        /> */}
      </div>
        );
    }
}

const style = {
    preview: {
      position: 'relative',
    },
    captureContainer: {
      display: 'flex',
      position: 'absolute',
      justifyContent: 'center',
      zIndex: 1,
      bottom: 0,
      width: '100%'
    },
    captureButton: {
      backgroundColor: '#fff',
      borderRadius: '50%',
      height: 56,
      width: 56,
      color: '#000',
      margin: 20
    },
    captureImage: {
      width: '100%',
    }
  };
  
export default Cameras;