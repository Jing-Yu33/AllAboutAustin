import React, { Component } from 'react';

class MapLegend extends Component {

    render() {
        return(
          <div>
           <h4 className="mt-2">Map Legend</h4>
                <div className="row">
                <div className="col-5">
                <ul className="list-unstyled">
                  
                  <li><img src="https://i.ibb.co/WHH8fHc/3288bd.png" alt=""/>&nbsp;10%</li>
                  <li><img src="https://i.imgur.com/lSMtmKA.png" alt=""/>&nbsp;20%</li>
                  <li><img src="https://i.imgur.com/xx72TDD.png" alt=""/>&nbsp;30% </li>
                  <li><img src="https://i.imgur.com/sIlIoNX.png" alt=""/>&nbsp;40% </li>
                  <li><img src="https://i.imgur.com/Wrac0Mc.png" alt=""/>&nbsp;50% </li>
                   
                </ul>
                </div>
                <div className="col-5">
                <ul className="list-unstyled">
                  <li><img src="https://i.imgur.com/LpUYGQO.png" alt=""/>&nbsp;60% </li>
                  <li><img src="https://i.imgur.com/pY6qMwT.png" alt=""/>&nbsp;70% </li>
                  <li><img src="https://i.ibb.co/Sm5c0mG/col9.png" alt=""/>&nbsp;80% </li>
                  <li><img src="https://i.imgur.com/uFyOFkC.png" alt=""/>&nbsp;90%</li>
                  <li><img src="https://i.ibb.co/txKQTK1/col11.png" alt=""/>&nbsp;100%</li>
                </ul>
                </div>
                </div>
              </div>
        )
  }
}

export default MapLegend;