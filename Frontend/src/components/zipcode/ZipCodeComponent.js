import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class ZipCodeComponent extends Component {

  renderIcon = (num) => {
    if(num === 0){
      return <i className="fas fa-times"></i>
    }else{
      return <i className="fas fa-check"></i>
    }
  }


  render() {
    // console.log(this.props.zipcode)
    return(
      <div className="my-3 card">
        <div className="card-header">
          <h4>{this.props.zipcode.region}: <Link to={`/zipcodes/${this.props.zipcode.zipcode}`}>{this.props.zipcode.zipcode}</Link></h4>
        </div>
      <div className="card-body" >
        <div className="row align-items-center">
          <div >
            <img className="card-img-top img-thumbnail" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="zipcode"/>
          </div>
          <div>
            {/* <h5 className="card-title">Region: </h5> */}
            <p>{this.props.zipcode.description.substring(0, Math.min(this.props.zipcode.description.length, 80))}...</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Average Rate: {this.props.zipcode.averageScore}</li>
              <li className="list-group-item">Food Rate: {this.props.zipcode.foodScore}</li>
              <li className="list-group-item">Traffic Rate: {this.props.zipcode.trafficScore}</li>
              <li className="list-group-item">Education Rate: {this.props.zipcode.educationScore}</li>
              <li className="list-group-item">Hospitals: {this.renderIcon(this.props.zipcode.numOfHospitals)} Cinemas: {this.renderIcon(this.props.zipcode.numOfCinemas)}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default ZipCodeComponent;