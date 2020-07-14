import React from 'react';
import { Card } from 'semantic-ui-react';
import { Button, Comment, Modal, Form,Icon} from 'semantic-ui-react';
import WriteReviewModal from './WriteReviewModal';
import { DataBase } from '../../apis'
class Review extends React.Component{
  state = {
    reviewsNumber : 0,
    triggerOpen : false,
    modalOpen: false
  }

  handleOpen = () => this.setState({ modalOpen: true })
  
  handleCancel = () => this.setState({ modalOpen: false })
  
  handleSubmit = async (content) => {
    this.handleCancel();
    // post to api
    return await DataBase.post('/`${this.props.zipcode}`/`${this.props.userId}`',content)

  }
  handleWriteReview = () => {
      this.setState({triggerOpen : true})
  }
  renderWriteModal = (triggerOpen) => {
    if (triggerOpen) return <WriteReviewModal triggerOpen = {this.state.triggerOpen}/>
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
                  <input placeholder='Tell people about your review about this place' />
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
          <Comment.Group>
            <Comment>
              <Comment.Content>
                <Comment.Author as='a'>Matt</Comment.Author>
                <Comment.Metadata>
                  <div>Today at 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>How artistic!</Comment.Text>
                <Comment.Actions>
                  <Comment.Action><i className='font awesome flag'></i></Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Card.Content>
      </Card>
    )
  }
}
export default Review