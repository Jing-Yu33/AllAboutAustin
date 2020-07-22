import React, { Component } from 'react';
import { connect } from 'react-redux';

import './IndividualZipcodePage.css';
import Heart from '../heart/Heart';
import PictureCarouselComponent from './PictureCarouselComponent'
import RowCards from './RowCards'
import IndividualZipcodeMap from '../map/IndividualZipcodeMap';
import { GetOneZipcode, AddZipcodesToUser, RemoveZipcodesFromUser, GetUserZipcodes } from '../../actions/index';
import Review from './Review'
class IndividualZipcodePage extends Component {
      
  state = {
    clicked: [],
    unclicked: [],
    cardStyle: null,
    hearted: this.props.userZipcodes!==null? this.props.userZipcodes.includes(this.props.match.params.zipcode) : null
  }

  async componentDidMount(){
      this.props.GetOneZipcode(this.props.match.params.zipcode);
      console.log(this.props.zipcode)
      // this.props.GetUserZipcodes()
  }

  shouldComponentUpdate(nextProps,nextState) {
      return (nextProps.isSignedIn !== this.props.isSignedIn || nextState.hearted !== this.state.hearted || nextProps.zipcode !== this.props.zipcode)
  }

  componentDidUpdate() {
    if (this.props.isSignedIn) {
      this.props.GetUserZipcodes(this.props.userId);
      // this.setState({hearted: this.props.userZipcodes.includes(this.props.match.params.zipcode)? true: false})
    }
  }
  renderScoreList = () => {
      return (
          <ul className="list-group list-group-flush">
              <li className="list-group-item">Holistic Score : {this.props.zipcode.averageScore}</li>
              <li className="list-group-item">Food Score : {this.props.zipcode.foodScore}</li>
              <li className="list-group-item">Traffic Score : {this.props.zipcode.trafficScore}</li>
              <li className="list-group-item">Education Score : {this.props.zipcode.educationScore}</li>
          </ul>
      )
  }
  onHeartClick = async () => {
    if (this.state.hearted !== true) {
      this.props.AddZipcodesToUser(this.props.userId,this.props.match.params.zipcode)
      console.log(this.props.zipcode.zipcode)
    }
    else {
      this.props.RemoveZipcodesFromUser(this.props.userId,this.props.match.params.zipcode)
      console.log(this.props.zipcode.zipcode)
    }
    await this.setState({hearted:!this.state.hearted})
  }
  renderFacilitesList = () =>{
      
      const { numOfCinemas, numOfHospitals, listOfHospitals, listOfCinemas } = this.props.zipcode
      
      const cinemasList = () => {
          if(numOfCinemas === 0){
              return <div>No cinemas in this zipcode</div>
          }
          const list = listOfCinemas.map( c => {
              return <div key={c}><i className="far fa-circle"></i> {c} </div>
          })
          return (
              <div>
                  {list}
              </div>
          )
      }
  
  const hospitalsList = () => {
      if(numOfHospitals === 0){
          return <div>No hospitals in this zipcode</div>
      }
      
      const list = listOfHospitals.map( h => {
          return <div key={h}><i className="far fa-circle"></i> {h} </div>
      })

      return (
          <div>
              {list}
          </div>
      )
  }

  return (
      <div className="mt-sm-2">
          <strong>Facilities:</strong>
          <ul className="list-group list-group-flush">
              <li className="list-group-item">Cinemas: 
                  {cinemasList()}
              </li>
              <li className="list-group-item">Hospitals: 
                  {hospitalsList()}
              </li>
          </ul>
      </div>
  )
}

  render(){
      
    if(!this.props.zipcode){
        return (
            <div>
                <div className="spinner">
                    <div className="dot1"></div>
                    <div className="dot2"></div>
                </div>
                <span className="d-flex justify-content-center">Loading... or No such zipcode</span>
            </div>
        )
    }
    return(
      <div className="jumbotron jumbotron-fluid my-3">
        <div className="container">
            <h1 className="display-4">Zip Code : {this.props.zipcode.zipcode} 
            {this.props.isSignedIn? 
              <span className="btn text-danger" onClick={this.onHeartClick}>
                {/* <Heart userList={this.props.userZipcodes} zipcode={this.props.zipcode.zipcode}/> */}
                <i  className={this.state.hearted===true ? "fas fa-heart" : "far fa-heart"}></i>
              </span> : null
                  }
            </h1>
            <span className="text-secondary">
                Region : {this.props.zipcode.region} 
            </span>
            <p className="pt-2">{this.props.zipcode.description}</p>
            <div className="row">
                <div className="col-lg-4">
                    {this.renderScoreList()}
                    {this.renderFacilitesList()}
                </div>
                <div className="col-lg-8 mt-sm-4 mt-md-0">
                    <IndividualZipcodeMap zipcode={this.props.zipcode.zipcode} lat={this.props.zipcode.latitude} lng={this.props.zipcode.longtitude}/>
                </div>
            </div>
            <div className="mt-4">
                <PictureCarouselComponent images={this.props.zipcode.images}/>
            </div>
            <div className="mt-4">
                <RowCards zipcode={this.props.zipcode} food={this.props.zipcode.foodData} education={this.props.zipcode.educationData} lat={this.props.zipcode.latitude} lng={this.props.zipcode.longtitude}/>
            </div>
            <div className="mt-4">
              <Review isSignedIn={this.props.isSignedIn}
                userId = {this.props.userId}
                zipcode = {this.props.match.params.zipcode}
                userName = {this.props.userName}
              />
            </div>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        zipcode: state.zipcodes[ownProps.match.params.zipcode],
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId,
        userZipcodes: state.auth.userZipcodes,
        userName: state.auth.userName
    }
}

export default connect(mapStateToProps, {
    GetOneZipcode, GetUserZipcodes, AddZipcodesToUser, RemoveZipcodesFromUser
})(IndividualZipcodePage)
