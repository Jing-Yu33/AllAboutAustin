import React from 'react';
import _ from 'lodash';

import { Card } from 'semantic-ui-react';
import { Button, Item, Modal, Form,Icon} from 'semantic-ui-react';
import WriteReviewModal from './WriteReviewModal';
import { DataBase } from '../../apis/DataBase'
import ZipCodePageChangeButton from './ZipCodePageChangeButton'

export const setCurrentPage = (page) => ({
  currentPage: page
})
class Review extends React.Component{
  limit = 3;
  constructor(props) {
    super(props)
    this.state = {
      reviewsNumber : 0,
      triggerOpen : false,
      modalOpen: false,
      content: null,
      reviewList: null,
      currentPage: 1
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount(){
    const response = await DataBase.get(`/comments/${this.props.zipcode}`) 
    this.setState({reviewList: response.data})
    console.log(this.state.reviewList);
    this.setState({reviewsNumber: this.state.reviewList.length})

  }
  handleOpen = () => this.setState({ modalOpen: true })
  
  handleCancel = () => this.setState({ modalOpen: false })
  
  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({content: event.target.value})
    console.log(this.state.content)
  }
  handleSubmit = async (event) => {
    this.handleCancel();
    // post to api
    
    event.preventDefault();
    const url =  `/comments/${this.props.zipcode}/${this.props.userId}`;
    const review = {
      content: this.state.content,
      userName: this.props.userName
    }
    await DataBase.post(url,review)

    const response = await DataBase.get(`/comments/${this.props.zipcode}`) 
    this.setState({reviewList: response.data, reviewsNumber: this.state.reviewsNumber + 1, content: null})
  }
  handleWriteReview = () => {
    this.setState({triggerOpen : true})
  }

   handleDeleteReview = async (commentId) => {
    await DataBase.delete(`/comments/${commentId}`);
    const newReviewList = this.state.reviewList.filter((review) => review.commentId!==commentId)
    this.setState({reviewList: newReviewList, reviewsNumber: this.state.reviewsNumber - 1})
  }
  renderWriteModal = (triggerOpen) => {
    if (triggerOpen) return <WriteReviewModal triggerOpen = {this.state.triggerOpen}/>
  }
  renderList = () => {
    if (this.state.reviewsNumber > 0) {
      const reviews = _.chunk( this.state.reviewList,this.limit)
      return (
        reviews[this.state.currentPage - 1].map((review) => {
        return(
          <Item >
            <Item.Content>
              <Item.Header as='a' style={{fontSize:'1.2em'}}>
              {review.userName}
              </Item.Header>
              <Item.Extra>
              {review.userId === this.props.userId  ? 
                <span style={{float:'right'}}> <Icon  className='trash alternate outline' onClick={() => this.handleDeleteReview(review.commentId)}></Icon> </span>
              : null}
                {review.id.date}
              </Item.Extra>
              <Item.Description>
                <p>{review.content}</p>
                </Item.Description>
            </Item.Content>
          </Item>
        )}
      ))
        }
  }
  handlePageChange = (e,{activePage}) => {
    this.setState(setCurrentPage(activePage))
  };
  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            Reviews
            <span className='date'>  ({this.state.reviewsNumber})</span>
           {/* {this.renderWriteModal(this.state.triggerOpen)} */}
            <Modal
              trigger={ <Button basic color = 'blue' content = 'blue' 
              disabled = {!this.props.isSignedIn}
              onClick = {this.handleOpen}
              floated = 'right'
              >
                Write a review
              </Button>}
              open={this.state.modalOpen}
              onClose={this.handleClose}
              size = 'small'
              centered = 'true'
            >
              <Modal.Content>
                <h3>Write your review</h3>
                <Form>
                  <Form.Field>
                    <label>Your Review</label>
                    <input placeholder="Tell people about your review about this place"  type="text" value={this.state.content} onChange={this.handleChange}/>
                  </Form.Field>
                </Form>
              </Modal.Content>
              <Modal.Actions>
                <Button color='green' onClick={this.handleSubmit} disabled={this.state.content === null || this.state.content.length === 0}>
                  Submit Your Review
                </Button>
                <Button color='standard' onClick={this.handleCancel} >
                  Cancel
                </Button>
              </Modal.Actions>
            </Modal>
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Card.Description>
            <Item.Group>
              {this.renderList()}
            </Item.Group>
          </Card.Description>
          <div className="text-center"> 
            <ZipCodePageChangeButton limit={this.limit} total={this.state.reviewsNumber} currentPage={this.state.currentPage} handlePageChange={this.handlePageChange}/>
          </div>
        </Card.Content>
      </Card>
    )
  }
}
export default Review