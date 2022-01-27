import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// AIzaSyDH1sb6w2kDo69hxIwkT6glD75Y35LGYQQ

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map google={this.props.google}
            onClick={this.onMapClicked}>
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          {/* <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow> */}
        </Map>
      )
    }
  }

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI')
  })(MapContainer)