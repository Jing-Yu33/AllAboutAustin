import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SignIn, SignOut, CreateUser } from '../../actions';
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Button, Icon } from 'semantic-ui-react';
class GoogleAuth extends Component{
    
  onSuccessResponse = (response) => {
    this.props.SignIn(response.profileObj.googleId, response.profileObj.name)
    this.props.CreateUser(response.profileObj.googleId,response.profileObj.name); // add name

  }

  onFailureResponse = (response) => {
    console.log(response);
  }

  logout = () => {
    this.props.SignOut()
  }

  render(){
    if(this.props.isSignedIn) {
      return(
        <div>
          <GoogleLogout
            render={renderProps => (
              <Button circular color='google plus'onClick={renderProps.onClick} disabled={renderProps.disabled} icon='google'>
              </Button>
            )}
              buttonText="Logout"
              onLogoutSuccess={this.logout}
          />
        </div>
      )
    }

    return (
      <div>
        <GoogleLogin 
            onSuccess={(response) => this.onSuccessResponse(response)}
            onFailure={(response) => this.onFailureResponse(response)}
            clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
            render={renderProps => (
              <Button basic onClick={renderProps.onClick} disabled={renderProps.disabled}>
                <Icon name='google' color='red'/>Sign in
              </Button>
            )}
        />
        </div>
      )
  }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId,
        userName: state.auth.name
    }
}

export default connect(mapStateToProps, {
    SignIn, SignOut, CreateUser
})(GoogleAuth);