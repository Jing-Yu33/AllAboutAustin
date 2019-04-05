import React, { Component } from 'react';

class HeatMap extends Component {

    
    render() {
        return(
            <div className="jumbotron">
                <h1>Should be an Interactive HeatMap</h1>
                <p>Reference: https://kepler.gl/</p>
                <p>Show the boundary of each zipcode area, when click, jump to corresponding zipcode</p>
            </div>
        )
  }
}

export default HeatMap;
