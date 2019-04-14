import React, {Component} from 'react';
import MapGL from 'react-map-gl';

import {defaultMapStyle, dataLayer} from './map-style.js';
import {updatePercentiles} from './utils';
import {fromJS} from 'immutable';
import {json as requestJson} from 'd3-request';
import ReactTooltip from 'react-tooltip'

import './HeatMap.css'
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
          zoom: 10,
          bearing: 0,
          pitch: 0,
          width: "100%",
          height: 500,
        }
      };
    
      componentDidMount() {
        requestJson(HeatMapGeojsonExample, (error, response) => {
          if (!error) {
            this._loadData(response);
          }
        });
      }
      
      componentDidUpdate() {
      }

      _loadData = data => {
    
        updatePercentiles(data, f => f.properties.foodScore);
    
        const mapStyle = defaultMapStyle
          // Add geojson source to map
          .setIn(['sources', 'foodScore'], fromJS({type: 'geojson', data}))
          // Add point layer to map
          .set('layers', defaultMapStyle.get('layers').push(dataLayer));
    
        this.setState({data, mapStyle});
      };
    
      _onViewportChange = viewport => this.setState({viewport});
    
      _onHover = event => {
        const {features, srcEvent: {offsetX, offsetY}} = event;
        const hoveredFeature = features && features.find(f => f.layer.id === 'data');
    
        this.setState({hoveredFeature, x: offsetX, y: offsetY});
      };
    
      _renderTooltip() {
        const {hoveredFeature, x, y} = this.state;
        return hoveredFeature && (
            <div>
                <div className="tooltip" style={{left: x, top: y}}>
                    <div>zipcode: {hoveredFeature.properties.zipcodes}</div>
                    <div>food Score: {hoveredFeature.properties.foodScore}</div>
                </div>
                {/* <ReactTooltip type="dark" effect="float">
                    <span>Hello</span>
                </ReactTooltip> */}
            </div>
        );
      }
    
      render() {
    
        const {viewport, mapStyle} = this.state;
    
        return (
          <div>
            <MapGL
              {...viewport}
              mapStyle={mapStyle}
              onViewportChange={this._onViewportChange}
              mapboxApiAccessToken={MAPBOX_TOKEN}
              onHover={this._onHover} >
    
              {this._renderTooltip()}
    
            </MapGL>
    
    
          </div>
        );
      }

}

export default HeatMap;
