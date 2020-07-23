import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddZipcodesToUser, RemoveZipcodesFromUser, GetUserZipcodes } from '../../actions/index';
import { Container, Button } from 'semantic-ui-react'
import UserReviews from './UserReviews';
import UserLiked from './UserLiked';
class Profile extends Component {
      
  state = {
    showUserLiked: this.props.isSignedIn,
    showUserReviews: false
  }

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
