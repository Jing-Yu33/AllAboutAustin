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
                  <Comment>
                    <Comment.Content>
                    <Comment.Author> 
                      You Commented on 
                      <Icon className="pin" color='red' link='true' onClick= {()=> this.onZipcodeClick(userReview.zipcode)}></Icon>
                      {userReview.zipcode}
                    </Comment.Author>
                      <Comment.Metadata>
                        <div>{userReview.id.date}</div>
                      </Comment.Metadata>
                      <Comment.Text><p> {userReview.content}</p></Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>
                          <Icon style={ {marginLeft:'auto',marginRight:'0'} } 
                          className='trash alternate outline' 
                          onClick={() => this.handleDeleteReview(userReview.commentId)}></Icon>
                        </Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
              )
      })
    }
  }

  render() {
    return (
      // <Container fluid style={{paddingBottom: '20px'}}>
        // <Header>All Your Commented Zipcodes</Header>
        <Comment.Group style={{width:'2000px'}}>
          <Comment>
          <Comment.Avatar src='https://react.semantic-ui.comhttps://react.semantic-ui.com/images/avatar/small/matt.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Matt</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.

</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          </Comment>
          {/* {this.renderList()} */}
        </Comment.Group>
      // </Container>

    )
  }
    // shouldComponentUpdate = (nextState) => {

    // }

    
}

export default UserReviews;