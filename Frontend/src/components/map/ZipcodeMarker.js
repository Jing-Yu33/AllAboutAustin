import React, { Component } from 'react';
import { Marker } from 'react-google-maps';

import history from '../../history';

class ZipcodeMarker extends Component {
  state = {
    activeMarker: {},         
    selectedPlace: {}
  }
 
  icon = {
    path: "M22-13h-44v23h16l6 5 6-5h16z",
    fillColor: "white", 
    fillOpacity: 0.8,
    strokeColor: "white",
    strokeOpacity: 0.8
    }
    onMarkClick = () => {
      history.push(`/zipcodes/${this.props.zipcode}`)
    }
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    }
    render() {
     
      return(
      <div>
          <Marker
              onClick={this.onMarkerMouseOver}
              label={this.props.zipcode}
              icon={this.icon}
              {...this.props}
          />
      </div>
    )}
};

export default ZipcodeMarker;