import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SignIn, SignOut, CreateUser } from '../../actions';
import { GoogleLogin, GoogleLogout } from "react-google-login";

class GoogleAuth extends Component{

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
                    clientId="280689795193-ubapinqcg16ah7vlskd1oimoisf82bsm.apps.googleusercontent.com"
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