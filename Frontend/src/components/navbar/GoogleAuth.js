import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SignIn, SignOut, CreateUser } from '../../actions';
import { GoogleLogin, GoogleLogout } from "react-google-login";

class GoogleAuth extends Component{
    GOOGLE_OAUTH_CLIENT_ID = "776329759143-e09klcknlgfqfu2mp7jipe5qecg53v3u.apps.googleusercontent.com"
    
    onSuccessResponse = (response) => {
        this.props.SignIn(response.profileObj.googleId, response.profileObj.name)
        this.props.CreateUser(response.profileObj.googleId);
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
                    clientId={this.GOOGLE_OAUTH_CLIENT_ID}
                    buttonText="Login"
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