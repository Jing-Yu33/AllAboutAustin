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
            <div>
                <div><p><strong>Zipcode:</strong> {hoveredFeature.properties.zipcode}</p></div>
                <div><p><strong>Food Score:</strong> {hoveredFeature.properties.value}</p></div>
            </div>
        )
    }
    else{
      return(
            <div>
                <div>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                </div>
            </div>
      )
    }
  }

  render() {
    const {viewport, mapStyle} = this.state;

    return (
      <div className="row">
        <div className="col-lg-2">
            <div><h4>Hover Over Area for More Details</h4></div>
            {this._renderTooltip()}
        </div>
        <div className="col-lg-10">
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
