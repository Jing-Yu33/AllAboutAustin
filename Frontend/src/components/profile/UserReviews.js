import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DataBase } from '../../apis/DataBase'
import { Grid, Icon, Comment, Container, Item, Header, Button } from 'semantic-ui-react';
import history from '/Users/yvonne/Documents/Projects/AustinData/Frontend/src/history.js'
class UserReviews extends Component {
      
  state = {
    userReviews: null,
    reviewsNumber: 0
  }

  async componentDidMount(){
    if(this.props.isSignedIn){
      console.log(this.props.userId)
      const response = await DataBase.get(`comments/user/${this.props.userId}`);
      console.log(response)
      this.setState({userReviews:response.data,reviewsNumber: response.data.length})
    }
  }
  onZipcodeClick = (zipcode) => {
    history.push(`/zipcodes/${zipcode}`)
  }
  handleDeleteReview = async (commentId) => {
    await DataBase.delete(`/comments/${commentId}`);
    const updatedReviews = this.state.userReviews.filter((review) => review.commentId!==commentId)
    this.setState({userReviews: updatedReviews, reviewsNumber: this.state.reviewsNumber - 1})
  }
  renderList = () => {
    if(this.state.userReviews!== null){
      // const userZipcodes = this.props.userZipcodes
      // console.log(userZipcodes);
    // const zipcodes = _.chunk(this.props.zipcodes, this.limit);
      return this.state.userReviews.map(userReview => {
              return (
                  <Item>
                    <Item.Content>
                    <Item.Header as='a' style={{fontSize:'1.2em'}}> 
                      You Commented on 
                      <Icon className="pin" color='red' link='true' onClick= {()=> this.onZipcodeClick(userReview.zipcode)}></Icon>
                      {userReview.zipcode}
                    </Item.Header>
                      <Item.Extra>
                        <div>{userReview.id.date}
                          <span style={{float:'right'}}> <Icon  className='trash alternate outline' onClick={() => this.handleDeleteReview(userReview.commentId)}></Icon> </span>
                        </div>
                      </Item.Extra>
                      <Item.Description><p> {userReview.content}</p></Item.Description>
                    </Item.Content>
                  </Item>
              )
      })
    }
  }

  render() {
    return (
      // <Container fluid style={{paddingBottom: '20px'}}>
        // <Header>All Your Commented Zipcodes</Header>
        <Item.Group >
          {this.renderList()}
        </Item.Group>
      // </Container>

    )
  }
    // shouldComponentUpdate = (nextState) => {

    // }

    
}

export default UserReviews;