import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class ZipCodeComponent extends Component {

  render() {
    return(
      <div className="my-3 card">
        <div className="card-header">
          <h4><Link to={`/zipcodes/${this.props.zipcode.zipcode}`}>{this.props.zipcode.zipcode}</Link></h4>
        </div>
      <div className="card-body" >
        <div className="row align-items-center">
          <div >
            <img className="card-img-top img-thumbnail" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="zipcode"/>
          </div>
          <div>
            <h5 className="card-title">Region/Description: Manually add in later phase</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Food Rate: {this.props.zipcode.foodScore}</li>
              <li className="list-group-item">Traffic Rate: {this.props.zipcode.trafficScore}</li>
              <li className="list-group-item">Education Rate: {this.props.zipcode.educationScore}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default ZipCodeComponent;