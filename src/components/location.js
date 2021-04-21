//require('dotenv').config();
import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
 
const style = {
  width: '70%',
  height: '70%'
}

class Location extends Component {
  render() {
    return (
        <div className="Location">
        <Map google={this.props.google} 
        zoom={14}
        style={style}
        initialCenter={{
          lat:  41.619, 
          lng: -87.236   
        }}
        onClick={this.onMapClicked}
        >
          
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location' } />
 
        <InfoWindow onClose={this.onInfoWindowClose}>

        </InfoWindow>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.GATSBY_API_KEY )
})(Location)
