import React from 'react';
import { Card } from 'semantic-ui-react';
import { Button, Comment, Modal, Form,Icon} from 'semantic-ui-react';
import WriteReviewModal from './WriteReviewModal';
import { DataBase } from '../../apis/DataBase'
class Review extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      reviewsNumber : 0,
      triggerOpen : false,
      modalOpen: false,
      content: null,
      reviewList: null,
      shouldUpdate: false
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
  shouldComponentUpdate() {
    return this.state.shouldUpdate || this.props.isSignedIn;
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
    this.setState({reviewList: response.data})
    this.setState({reviewsNumber: this.state.reviewList.length})

    
  }
  handleWriteReview = () => {
      this.setState({triggerOpen : true})
  }
  renderWriteModal = (triggerOpen) => {
    if (triggerOpen) return <WriteReviewModal triggerOpen = {this.state.triggerOpen}/>
  }
  renderList = () => {
    if (this.state.reviewsNumber > 0) {
      return (
        this.state.reviewList.map((review) => {
        return(
          <Comment.Group>
            <Comment>
              <Comment.Content>
                <Comment.Author as='a'>{review.userName}</Comment.Author>
                <Comment.Metadata>
                  <div>{review.id.date}</div>
                </Comment.Metadata>
                <Comment.Text><p>{review.content}</p></Comment.Text>
                <Comment.Actions>
                  <Comment.Action><Icon className='font awesome flag'></Icon></Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        )}
      )
      )
        }
  }
  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            Review
            <span className='date'>{this.state.reviewsNumber}</span>
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
          >
        {/* <Header icon='browser' content='Cookies policy' /> */}
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
              <Button color='green' onClick={this.handleSubmit} >
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
          {this.renderList()}
        </Card.Content>
      </Card>
    )
  }
}
export default Review