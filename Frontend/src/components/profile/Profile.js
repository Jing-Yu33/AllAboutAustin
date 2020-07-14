import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DataBase } from '../../apis/DataBase'

import { AddZipcodesToUser, RemoveZipcodesFromUser, GetUserZipcodes } from '../../actions/index';

import { Icon } from 'semantic-ui-react'
import ZipCodeCardComponent from '../zipcode/ZipCodeCardComponent'
class Profile extends Component {
      
    state = {
      likedZipcodesList:null
    }

    async componentDidMount(){
      if(this.props.isSignedIn){
        console.log(this.props.userId)
        this.props.GetUserZipcodes(this.props.userId);
        const userZipcodes = this.props.userZipcodes;
        console.log(userZipcodes)
        if (userZipcodes.length > 0) {
          const response = await DataBase.post('/zipcodes',userZipcodes) 
          this.setState({likedZipcodesList: response.data})
          console.log(this.state.likedZipcodesList);
          // this.setState({reviewsNumber: this.state.reviewList.length})
          // this.props.GetUserZipcodes(this.props.userId)
        }
        
      }
    }
    
    renderList = () => {
      if(this.props.isSignedIn){
        // const userZipcodes = this.props.userZipcodes
        // console.log(userZipcodes);
      // const zipcodes = _.chunk(this.props.zipcodes, this.limit);
      if (this.state.likedZipcodesList!== null) {
        return this.state.likedZipcodesList.map(likedZipcode => {
                return (
                  <div className="col-lg-6" key={likedZipcode.zipcode}>
                    <Icon trash alternate outline></Icon>
                    <ZipCodeCardComponent zipcode={likedZipcode} /> 
                  </div>
                )
        })
        }
    }
    }

    render() {
      return (
        <div className="container">
          {this.renderList()}
        </div>

      )
    }
    // shouldComponentUpdate = (nextState) => {

    // }

    
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId,
        userZipcodes: state.auth.userZipcodes,
        userName: state.auth.userName
    }
}

export default connect(mapStateToProps, {
    AddZipcodesToUser, RemoveZipcodesFromUser, GetUserZipcodes
})(Profile)
