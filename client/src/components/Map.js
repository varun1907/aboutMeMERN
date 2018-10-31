import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'


export default class Map extends Component {
  static defaultProps = {
    center: { lat: 29.3080, lng: 78.5033 },
    zoom: 11
  }

render() {
    return (
    <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
        </GoogleMapReact>
      </div>
    )
  }
}
