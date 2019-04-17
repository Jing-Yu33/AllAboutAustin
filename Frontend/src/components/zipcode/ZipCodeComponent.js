import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { AddZipcodesToUser, RemoveZipcodesFromUser } from '../../actions';

class ZipCodeComponent extends Component {
  
  state = {
    clicked: [],
    unclicked: []
  }

  renderExistIcon = (num) => {
    if(num === 0){
      return <i className="fas fa-times"></i>
    }else{
      return <i className="fas fa-check"></i>
    }
  }

  onHeartAddClick = (zipcode) => {
    this.props.AddZipcodesToUser(this.props.userId, zipcode);
    this.setState(prevState =>({
      clicked: [...prevState.clicked, zipcode],
      unclicked: this.state.unclicked.filter((_, i) => this.state.unclicked[i]!==zipcode)
    }))
  }

  onHeartRemoveClick = (zipcode) => {
    this.props.RemoveZipcodesFromUser(this.props.userId, zipcode);
    this.setState(prevState =>({
      unclicked: [...prevState.unclicked, zipcode],
      clicked: this.state.clicked.filter((_, i) => this.state.clicked[i]!==zipcode)
    }))
  }

  renderHeart = () => {
    const { zipcode } = this.props.zipcode;
    if(this.props.isSignedIn){
      if(this.state.unclicked.includes(zipcode)){
        return <button onClick={(e) => this.onHeartAddClick(this.props.zipcode.zipcode)}><i className="far fa-heart"></i></button>
      }

      if(this.props.userZipcodes.includes(zipcode) || this.state.clicked.includes(zipcode)){
        return <button onClick={(e) => this.onHeartRemoveClick(zipcode)}><i className="fas fa-heart"></i></button>
      } else {
        return <button onClick={(e) => this.onHeartAddClick(this.props.zipcode.zipcode)}><i className="far fa-heart"></i></button>
      }
    }
  }

  render() {
    return(
      <div className="my-3 card">
        <div className="card-header">
          <h4>{this.props.zipcode.region}: 
            <Link to={`/zipcodes/${this.props.zipcode.zipcode}`}>
              {this.props.zipcode.zipcode}
            </Link>
            {this.renderHeart()}
          </h4>
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
              <li className="list-group-item">Hospitals: {this.renderExistIcon(this.props.zipcode.numOfHospitals)} Cinemas: {this.renderExistIcon(this.props.zipcode.numOfCinemas)}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      isSignedIn: state.auth.isSignedIn,
      userId: state.auth.userId,
      userZipcodes: state.auth.userZipcodes
  }
}

export default connect(mapStateToProps, {
  AddZipcodesToUser, RemoveZipcodesFromUser
})(ZipCodeComponent);