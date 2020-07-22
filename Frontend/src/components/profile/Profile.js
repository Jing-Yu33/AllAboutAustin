import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DataBase } from '../../apis/DataBase'

import { AddZipcodesToUser, RemoveZipcodesFromUser, GetUserZipcodes } from '../../actions/index';

import { Grid, Icon, Header, Container, Card, Button } from 'semantic-ui-react'
import ZipCodeCardComponent from '../zipcode/ZipCodeCardComponent'
import UserReviews from './UserReviews';
import UserLiked from './UserLiked';
class Profile extends Component {
      
    state = {
      showUserLiked: false,
      showUserReviews: false
    }

    // async componentDidMount(){
    //   if(this.props.isSignedIn){
    //     console.log(this.props.userId)
    //     this.props.GetUserZipcodes(this.props.userId);
    //     const userZipcodes = this.props.userZipcodes;
    //     console.log(userZipcodes)
    //     if (userZipcodes.length > 0) {
    //       const response = await DataBase.post('/zipcodes',userZipcodes) 
    //       this.setState({likedZipcodesList: response.data})
    //       console.log(this.state.likedZipcodesList);
    //       // this.setState({reviewsNumber: this.state.reviewList.length})
    //       // this.props.GetUserZipcodes(this.props.userId)
    //     }
        
    //   }
    // }
    handleUserLikedButton = () => {
      this.setState({showUserLiked: true})
      this.setState({showUserReviews: false})
    }
    handleUserReviewsButton = () => {
      this.setState({showUserReviews: true})
      this.setState({showUserLiked: false})

    }
    render() {
      return (
        <Container fluid style={{paddingBottom: '20px'}}>
          <Container fluid style={{paddingBottom: '20px'}}>
            <Button basic blue onClick={this.handleUserLikedButton} disabled={!this.props.isSignedIn}>Liked Zipcodes</Button>
            <Button basic blue onClick={this.handleUserReviewsButton} disabled={!this.props.isSignedIn}>Commented Zipcodes</Button>
          </Container>
          {this.state.showUserLiked? <UserLiked/> : null}
          {this.state.showUserReviews? <UserReviews 
          isSignedIn={this.props.isSignedIn}
          userId={this.props.userId}
          />:null}
        </Container>
        

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
