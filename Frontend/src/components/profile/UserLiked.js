import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DataBase } from '../../apis/DataBase'
import { AddZipcodesToUser, RemoveZipcodesFromUser, GetUserZipcodes } from '../../actions/index';
import { Grid, Header, Container } from 'semantic-ui-react'
import ZipCodeCardComponent from '../zipcode/ZipCodeCardComponent'
class UserLiked extends Component {
      
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
  handleUnlike = (unlikedzipcode) =>{
    const newList =  this.state.likedZipcodesList.filter(zipcode => zipcode.zipcode!== unlikedzipcode)
    this.setState({likedZipcodesList:newList})
  }
  renderList = () => {
    if(this.props.isSignedIn){
      if (this.state.likedZipcodesList!== null) {
        return this.state.likedZipcodesList.map(likedZipcode => {
          return (
            <Grid.Column key={likedZipcode.zipcode}>
              <ZipCodeCardComponent zipcode={likedZipcode} handleUnlike={this.handleUnlike} userZipcodes={this.state.likedZipcodesList}/> 
            </Grid.Column>
          )
      })
      }
  }
  }
  render() {
    return (
      <Container fluid style={{paddingBottom: '20px'}}>
        <Header>All Your Liked Zipcodes</Header>
        <Grid columns={3}>
            {this.renderList()}
        </Grid>    
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
})(UserLiked)
