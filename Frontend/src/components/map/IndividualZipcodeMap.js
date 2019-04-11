import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, KmlLayer, TrafficLayer } from 'react-google-maps';
import axios from 'axios';

class IndividualZipcodeMap extends Component {
  
  state = {
      lat: 0,
      lng: 0
  }

  getLocation = async () => {
    var response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.zipcode}&key=AIzaSyA1Kk6GzjZDS0FhojVc0LJqTc4YcwSBE8w`)
    this.setState({
        lat: response.data.results[0].geometry.location.lat,
        lng: response.data.results[0].geometry.location.lng,
    })
  }
  
  url = `https://sites.google.com/site/allaboutaustinzipcodeskml/zipcodes/zip${this.props.zipcode}.kml`;

  componentDidMount() {
    this.getLocation();
  }

  render(){
    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap 
          defaultCenter = { { lat: this.state.lat, lng: this.state.lng } }
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
                containerElement={ <div style={{ height: `200px`, width: '400px' }} /> }
                mapElement={ <div style={{ height: `100%` }} /> }
            />
        </div>
    );
  }
};
export default IndividualZipcodeMap;