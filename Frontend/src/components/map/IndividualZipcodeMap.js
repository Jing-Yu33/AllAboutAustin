import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, KmlLayer, TrafficLayer } from 'react-google-maps';

class IndividualZipcodeMap extends Component {
    
  url = `https://sites.google.com/site/allaboutaustinzipcodeskml/zipcodes/zip${this.props.zipcode}.kml`;

  render(){
    console.log(this.url)
    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap 
          defaultCenter = { { lat: this.props.lat, lng: this.props.lng } }
          defaultZoom = { 11 }
        >
          <TrafficLayer autoUpdate />
          <KmlLayer
            url = { this.url }
            options = {{ preserveViewport: true, clickable: false }}
          />
        </GoogleMap>
     ));

    return(
        <div>
            <GoogleMapExample
                containerElement={ <div style={{ height: `450px`, width: '100%' }} /> }
                mapElement={ <div style={{ height: `100%` }} /> }
            />
        </div>
    );
  }
};
export default IndividualZipcodeMap;