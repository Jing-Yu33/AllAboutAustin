import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withGoogleMap, GoogleMap, KmlLayer, TrafficLayer } from 'react-google-maps';

import ZipcodeMarker from './ZipcodeMarker'; 

class ZipcodeMap extends Component {
  
  url = "https://sites.google.com/site/allaboutaustinzipcodeskml/test/AustinZipcodes.kml"
 
  renderMarkers = (zipcode) =>{
    return (
        <ZipcodeMarker
            key={zipcode.zipcode}
            zipcode={zipcode.zipcode}
            position={{ lat: +zipcode.latitude, lng: zipcode.longtitude }}
        />
    )
  }
  
  render(){
    
    const GoogleMapExample = withGoogleMap(() => (
      <GoogleMap 
        defaultCenter = { { lat: 30.2672, lng: -97.74306 } }
        defaultZoom = { 11 }
      >
        <TrafficLayer autoUpdate />
        <KmlLayer
          url = "https://sites.google.com/site/allaboutaustinzipcodeskml/zipcodes/AustinZipcodes.kml"
          options = {{ preserveViewport: true, clickable: false }}
        />
        { this.props.zipcodes.map( zipcode => {
              return this.renderMarkers(zipcode)
          })
          }
      </GoogleMap>
     ));

    return(
      <div>
          <GoogleMapExample
            containerElement={ <div style={{ height: `300px`, width: '100%' }} /> }
            mapElement={ <div style={{ height: `100%` }} /> }
          />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
    return {
        zipcodesLocations: state.zipcodesLocations
    }
}

export default connect(mapStateToProps)(ZipcodeMap);