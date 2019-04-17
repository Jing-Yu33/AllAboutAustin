import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { AddZipcodesToUser, RemoveZipcodesFromUser } from '../../actions';

class ZipCodeComponent extends Component {
  
  state = {
    clicked: [],
    unclicked: [],
    cardStyle: null
  }

  renderExistIcon = (num) => {
    if(num === 0){
      return <i className="fas fa-times text-danger"></i>
    }else{
      return <i className="fas fa-check text-success"></i>
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
        return <div onClick={(e) => this.onHeartAddClick(this.props.zipcode.zipcode)}><i className="far fa-heart"></i></div>
      }

      if(this.props.userZipcodes.includes(zipcode) || this.state.clicked.includes(zipcode)){
        return <div onClick={(e) => this.onHeartRemoveClick(zipcode)}><i className="fas fa-heart"></i></div>
      } else {
        return <div onClick={(e) => this.onHeartAddClick(this.props.zipcode.zipcode)}><i className="far fa-heart"></i></div>
      }
    }
  }

  onMouseEnter = () => {
    this.setState({
      cardStyle: {
        boxShadow: "0 20px 10px rgba(8, 112, 184, 0.7)"
      }
    })
  }

  onMouseLeave = () => {
    this.setState({
      cardStyle: {
        boxShadow: null
      }
    })
  }

  render() {
    return(
      <Link to={`/zipcodes/${this.props.zipcode.zipcode}`}  className="CardLink">
        <div className="my-3 card" 
            style={this.state.cardStyle} 
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}>
          <div className="card-header">
            <h4>
              <span className="text-secondary">
                {this.props.zipcode.region}: 
              </span>
              <span className="text-primary">
                  {this.props.zipcode.zipcode}
                
              </span>
              <span className="btn text-danger">{this.renderHeart()}</span>
            </h4>
          </div>
        <div className="card-body" >
          <div className="row align-items-center">
            <div>
              {/* <img className="card-img-top img-thumbnail" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="zipcode"/> */}
              <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="zipcode"/>
            </div>
            <div>
              <div className="justify-content-center">
                {this.props.zipcode.description.substring(0, Math.min(this.props.zipcode.description.length, 100))}...
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-6">
                      Average Rate: <span className="text-info">{this.props.zipcode.averageScore}</span>
                    </div>
                    <div className="col-6">
                      Food Rate: <span className="text-info">{this.props.zipcode.foodScore}</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-6">
                      Traffic Rate: <span className="text-info">{this.props.zipcode.trafficScore}</span>
                    </div>
                    <div className="col-6">
                      Education Rate: <span className="text-info">{this.props.zipcode.educationScore}</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-6">
                      Hospitals: {this.renderExistIcon(this.props.zipcode.numOfHospitals)}
                    </div>
                    <div className="col-6">
                      Cinemas: {this.renderExistIcon(this.props.zipcode.numOfCinemas)}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </Link>
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