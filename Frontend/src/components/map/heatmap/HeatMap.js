import React, {Component} from 'react';
import MapGL from 'react-map-gl';

import {defaultMapStyle, dataLayer} from './map-style.js';
import {updatePercentiles} from './utils';
import {fromJS} from 'immutable';
import {json as requestJson} from 'd3-request';

import HeatMapGeojsonExample from './HeatMapGeojsonExample.geojson';

const MAPBOX_TOKEN = 'pk.eyJ1IjoieWl4aW5nd2FuZyIsImEiOiJjanVlbHloenMwMTBlNDRucTRrNDI2Z3VyIn0.uD87F_upW33Ev21qNWnqSQ'; // Set your mapbox token here

class HeatMap extends Component {

  state = {
    mapStyle: defaultMapStyle,
    data: null,
    hoveredFeature: null,
    viewport: {
      latitude: 30.2672,
      longitude: -97.7431,
      zoom: 11,
      bearing: 0,
      pitch: 0
    }
  };

  componentDidMount() {
    requestJson(HeatMapGeojsonExample, (error, response) => {
      if (!error) {
        this._loadData(response);
      }
    });
  }

  _loadData = data => {

    updatePercentiles(data, f => f.properties.foodScore);

    const mapStyle = defaultMapStyle
      // Add geojson source to map
      .setIn(['sources', 'score'], fromJS({type: 'geojson', data}))
      // Add point layer to map
      .set('layers', defaultMapStyle.get('layers').push(dataLayer));

    this.setState({data, mapStyle});
  };

  _onViewportChange = viewport => this.setState({viewport});

  _onClick = event => {
    const {features, srcEvent: {offsetX, offsetY}} = event;
    const hoveredFeature = features && features.find(f => f.layer.id === 'data');

    this.setState({hoveredFeature, x: offsetX, y: offsetY});
  };

  _renderTooltip() {
    
    const {hoveredFeature} = this.state;
    if(hoveredFeature){
        return (
          <div className="row-bl-2">
                <ul className="list-unstyled">
                  <li><strong>Zipcode:</strong> {hoveredFeature.properties.zipcode}</li>
                  <li><strong>Food Score:</strong> {hoveredFeature.properties.value}</li>
                  <li><strong>Traffic Score:</strong> {hoveredFeature.properties.value}</li>
                  <li><strong>Education Score:</strong> {hoveredFeature.properties.value}</li>
                </ul>

                <h4>Map Legend</h4>
                <div className="row">
                <div className="col-5">
                <ul className="list-unstyled">
                  <li><img src="https://i.ibb.co/WHH8fHc/3288bd.png"/>&nbsp;10%</li>
                  <li><img src="https://i.ibb.co/WHH8fHc/3288bd.png"/>&nbsp;20% </li>
                  <li><img src="https://i.ibb.co/WHH8fHc/3288bd.png"/>&nbsp;30% </li>
                  <li><img src="https://i.ibb.co/WHH8fHc/3288bd.png"/>&nbsp;40% </li>
                  <li><img src="https://i.ibb.co/WHH8fHc/3288bd.png"/>&nbsp;50% </li>
                </ul>
                </div>
                <div className="col-5">
                <ul className="list-unstyled">
                   <li><img src="https://i.ibb.co/WHH8fHc/3288bd.png"/>&nbsp;60% </li>
                  <li><img src="https://i.ibb.co/WHH8fHc/3288bd.png"/>&nbsp;70% </li>
                  <li><img src="https://i.ibb.co/WHH8fHc/3288bd.png"/>&nbsp;80% </li>
                  <li><img src="https://i.ibb.co/WHH8fHc/3288bd.png"/>&nbsp;90% </li>
                  <li><img src="https://i.ibb.co/WHH8fHc/3288bd.png"/>&nbsp;100%</li>
                </ul>
                </div>
                </div>

          </div>

        )
    }
    else{
      return(
            <div className="row-bl-2">
                <ul className="list-unstyled">
                  <li><strong>Zipcode:</strong> </li>
                  <li><strong>Food Score:</strong> </li>
                  <li><strong>Traffic Score:</strong></li>
                  <li><strong>Education Score:</strong></li>
                </ul>

                <h4>Map Legend</h4>
                <div className="row">
                <div className="col-5">
                <ul className="list-unstyled">
                  <li><img src="https://i.ibb.co/WHH8fHc/3288bd.png"/>&nbsp;10%</li>
                  <li><img src="https://i.ibb.co/WHH8fHc/3288bd.png"/>&nbsp;20% </li>
                  <li><img src="https://i.ibb.co/WHH8fHc/3288bd.png"/>&nbsp;30% </li>
                  <li><img src="https://i.ibb.co/WHH8fHc/3288bd.png"/>&nbsp;40% </li>
                  <li><img src="https://i.ibb.co/WHH8fHc/3288bd.png"/>&nbsp;50% </li>
                </ul>
                </div>
                <div className="col-5">
                <ul className="list-unstyled">
                   <li><img src="https://i.ibb.co/WHH8fHc/3288bd.png"/>&nbsp;60% </li>
                  <li><img src="https://i.ibb.co/WHH8fHc/3288bd.png"/>&nbsp;70% </li>
                  <li><img src="https://i.ibb.co/WHH8fHc/3288bd.png"/>&nbsp;80% </li>
                  <li><img src="https://i.ibb.co/WHH8fHc/3288bd.png"/>&nbsp;90% </li>
                  <li><img src="https://i.ibb.co/WHH8fHc/3288bd.png"/>&nbsp;100%</li>
                </ul>
                </div>
                </div>

          </div>
      )
    }
  }

  render() {
    const {viewport, mapStyle} = this.state;

    return (
      <div className="row">
        <div className="col-lg-3">
            <div><h4>Hover Over Area for More Details</h4></div>
            {this._renderTooltip()}
        </div>
        <div className="col-lg-9">
            <MapGL
            {...viewport}
            width="100%"
            height="400px"
            mapStyle={mapStyle}
            onViewportChange={this._onViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            onHover={this._onClick} >
            </MapGL>
        </div>
      </div>
    );
  }

}

export default HeatMap;
