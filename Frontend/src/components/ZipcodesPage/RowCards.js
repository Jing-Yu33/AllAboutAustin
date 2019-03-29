import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class RowCards extends Component {

    render() {
        return(
<div className="row">
  <div className="col-sm-4 d-flex align-items-stretch">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Food</h5>
        <p className="card-text">Placeholder, future will have list of food establishments in zip code</p>
      </div>
    </div>
  </div>
  <div className="col-sm-4 d-flex align-items-stretch">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Traffic</h5>
        <p className="card-text">Placeholder, future will have indicator for traffic congestion in zip code</p>
      </div>
    </div>
  </div>
  <div className="col-sm-4 d-flex align-items-stretch">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Education</h5>
        <p className="card-text">Placeholder, future will have list of schools in zip code</p>
      </div>
    </div>
  </div>
</div>
        )
  }
}

export default RowCards;


