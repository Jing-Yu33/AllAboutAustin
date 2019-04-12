import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withGoogleMap, GoogleMap, KmlLayer, TrafficLayer } from 'react-google-maps';

import ZipcodeMarker from './ZipcodeMarker'; 

class ZipcodeMap extends Component {
  
  // From database, get zipcode - lat, lng list
  async componentDidMount(){

  }

  url = "https://sites.google.com/site/allaboutaustinzipcodeskml/test/AustinZipcodes.kml"

  renderMarkers = () =>{
    // return(
    //     this.props.ZipcodesLocation.map((zipcode) => {
    //         return (
    //             <ZipcodeMarker
    //             key={zipcode}
    //             zipcode={zipcode}
    //             position={{ lat: 30.2672, lng: -97.7431 }}
    //             // onClick={this.onMarkerClick}
    //             />
    //         )
    //     })
    // )
    var zipcode = "78701"
    return (
        <ZipcodeMarker
            key={zipcode}
            zipcode={zipcode}
            position={{ lat: 30.2672, lng: -97.7431 }}
            // onClick={this.onMarkerClick}
        >
        
        </ZipcodeMarker>
    )
  }

  render(){
    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap 
          defaultCenter = { { lat: 30.2672, lng: -97.74306 } }
          defaultZoom = { 12 }
        >
          <TrafficLayer autoUpdate />
          <KmlLayer
            url = "https://sites.google.com/site/allaboutaustinzipcodeskml/zipcodes/AustinZipcodes.kml"
            options = {{ preserveViewport: true, clickable: false }}
          />
          {this.renderMarkers()}
        </GoogleMap>
     ));

    return(
        <div>
            <GoogleMapExample
                containerElement={ <div style={{ height: `500px`, width: '100%' }} /> }
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