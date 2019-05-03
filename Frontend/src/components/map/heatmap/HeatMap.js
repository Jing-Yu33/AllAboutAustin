import React, {Component} from 'react';
import MapGL from 'react-map-gl';

import {defaultMapStyle, dataLayer} from './map-style.js';
import {updatePercentiles} from './utils';
import {fromJS} from 'immutable';
import {json as requestJson} from 'd3-request';

import NonHoveredZipCode from './NonHoveredZipCode';
import MapLegend from './MapLegend';
import HeatMapGeojsonReal from './HeatmapGeojsonReal.geojson';
// import HeatMapGeojsonExample from './HeatMapGeojsonExample.geojson';


class HeatMap extends Component {

  state = {
    mapStyle: defaultMapStyle,
    data: null,
    hoveredFeature: null,
    viewport: {
      latitude: 30.2672,
      longitude: -97.7431,
      zoom: 9,
      bearing: 0,
      pitch: 0
    }
  };

  componentDidMount() {
    requestJson(HeatMapGeojsonReal, (error, response) => {
      if (!error) {
        this._loadData(response);
      } else {
        console.log(error)
      }
    });
  }

  _loadData = data => {



    // updatePercentiles(data, f => f.properties.foodScore);
    updatePercentiles(data, this.props.category);

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
                <ul className="list-group list-group-flush">
                  <li className="list-group-item active"><strong>Zipcode:</strong> {hoveredFeature.properties.zipcode}</li>
                  <li className="list-group-item "><strong>Food Score:</strong> {hoveredFeature.properties.foodScore}</li>
                  <li className="list-group-item "><strong>Traffic Score:</strong> {hoveredFeature.properties.trafficScore}</li>
                  <li className="list-group-item "><strong>Education Score:</strong> {hoveredFeature.properties.educationScore}</li>
                </ul>
                <MapLegend/>
          </div>
        		
        )
    }
    else{
      return(
      	  <div>
      	 		  <NonHoveredZipCode/>
                  <MapLegend/>
                  
          </div>
      )
    }
  }

  render() {
    const {viewport, mapStyle} = this.state;

    return (
      <div className="row">
        <div className="col-lg-4">
            <div><h4>Hover Over Area for More Details</h4></div>
            <p>This heatmap ranks based on relative performance in a given category.</p>
            {this._renderTooltip()}
        </div>
        <div className="col-lg-8">
            <MapGL
            {...viewport}
            width="100%"
            height="500px"
            mapStyle={mapStyle}
            onViewportChange={this._onViewportChange}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onHover={this._onClick} >
            </MapGL>
        </div>
      </div>
    );
  }

}

export default HeatMap;
