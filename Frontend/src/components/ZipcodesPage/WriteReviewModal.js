import React from 'react';
import { Button, Modal, Icon} from 'semantic-ui-react';
class WriteReviewModal extends React.Component{
    
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        trigger={this.props.triggerOpen? this.handleOpen : this.handleClose}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Modal.Content>
          <h3>This website uses cookies to ensure the best user experience.</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }


}

export default WriteReviewModal;