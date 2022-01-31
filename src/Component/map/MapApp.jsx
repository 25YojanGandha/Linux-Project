// import React, { Component } from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// export class MapContainer extends Component {
//     state = {
//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {},
//     };
   
//     onMarkerClick = (props, marker, e) =>
//       this.setState({
//         selectedPlace: props,
//         activeMarker: marker,
//         showingInfoWindow: true
//       });
   
//     onMapClicked = (props) => {
//       if (this.state.showingInfoWindow) {
//         this.setState({
//           showingInfoWindow: false,
//           activeMarker: null
//         })
//       }
//     };
   
//     render() {
//       return (
//         <Map google={this.props.google}
//             onClick={this.onMapClicked}>
//           <Marker onClick={this.onMarkerClick}
//                   name={'Current location'} />
   
//           {/* <InfoWindow
//             marker={this.state.activeMarker}
//             visible={this.state.showingInfoWindow}>
//               <div>
//                 <h1>{this.state.selectedPlace.name}</h1>
//               </div>
//           </InfoWindow> */}
//         </Map>
//       )
//     }
//   }

//   export default GoogleApiWrapper({
//     apiKey: ('AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI')
//   })(MapContainer)

import './Map.css';
import React from 'react';
import Map from "mapmyindia-react";

class MapApp extends React.Component {
    render () {
        return (
             <Map height={'100%'} width={'100%'}
         markers={[
             {
                 position: [18.5314, 73.845],
                 draggable: true,
                 title: "Marker title",
                 onClick: e => {
                     console.log("clicked ");
                 },
                 onDragend: e => {
                     console.log("dragged");
                 }
             }
         ]}
         />
        )
    }
}

export default MapApp;