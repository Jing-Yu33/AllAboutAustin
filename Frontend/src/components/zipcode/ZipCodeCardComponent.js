import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Rating } from 'semantic-ui-react';
import Heart from '../heart/Heart';
import history from '../../history';
import { AddZipcodesToUser, RemoveZipcodesFromUser, GetUserZipcodes } from '../../actions';

class ZipCodeCardComponent extends Component {
  
  state = {
    clicked: [],
    unclicked: [],
    cardStyle: null
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.isSignedIn !== this.props.isSignedIn || JSON.stringify(nextProps.userZipcodes) !== JSON.stringify(this.props.userZipcodes) || nextProps.zipcodes !== this.props.zipcodes || nextState.cardStyle !== this.state.cardStyle)
  }

  componentDidUpdate() {
    if(this.props.isSignedIn){
        this.props.GetUserZipcodes(this.props.userId);
    }
  }

  renderExistIcon = (num) => {
    if(num === 0){
      return <i className="fas fa-times text-danger"></i>
    }else{
      return <i className="fas fa-check text-success"></i>
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

  onCardClick = () => {
    history.push(`/zipcodes/${this.props.zipcode.zipcode}`)
  }

  render() {
    return(
      <div onClick={this.onCardClick} className="CardLink">
        <div className="my-3 card bg-light ZipCodeCardComponent" 
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
              <span className="btn text-danger"><Heart userList={this.props.userZipcodes} zipcode={this.props.zipcode.zipcode}/></span>
            </h4>
          </div>
        <div className="card-body" >
          <div className="row align-items-center">
            <div>
              {/* <img className="card-img-top img-thumbnail" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="zipcode"/> */}
              <img className="card-img-top img-thumbnail"
                    style={{height: '200px', width: '100%', objectFit: 'fill'}}
                    src={this.props.zipcode.images[0]} 
                    alt="zipcode"/>
            </div>
            <div>
              <div className="justify-content-center">
                {this.props.zipcode.description.substring(0, Math.min(this.props.zipcode.description.length, 100))}...
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-light">
                  <div className="row">
                    <Rating defaultRating={this.props.zipcode.averageScore / 10 * 5} maxRating={5} disabled /> 
                    xx Reviews
                  </div>
                  <div className="row">
                   
                  </div>
                  <div className="row">
                    <div className="col-6">
                      Holistic Score: <span className="text-info">{this.props.zipcode.averageScore}</span>
                    </div>
                    <div className="col-6">
                      Food Score: <span className="text-info">{this.props.zipcode.foodScore}</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item bg-light">
                  <div className="row">
                    <div className="col-6">
                      Traffic Score: <span className="text-info">{this.props.zipcode.trafficScore}</span>
                    </div>
                    <div className="col-6">
                      Education Score: <span className="text-info">{this.props.zipcode.educationScore}</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item bg-light">
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      zipcodes: state.zipcodes,
      isSignedIn: state.auth.isSignedIn,
      userId: state.auth.userId,
      userZipcodes: state.auth.userZipcodes
  }
}

export default connect(mapStateToProps, {
  GetUserZipcodes, AddZipcodesToUser, RemoveZipcodesFromUser
})(ZipCodeCardComponent);