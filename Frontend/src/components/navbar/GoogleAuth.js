import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from "react-google-login";

class GoogleAuth extends Component{

    state = {
        isLoggedIn: null,
        userName: null,
        token: ''
    }

    onSuccessResponse = (response) => {
        this.setState({
            isLoggedIn: true,
            userName: response.profileObj.name,
        })
    }

    onFailureResponse = (response) => {
       console.log(response);
    }

    logout = () => {
        this.setState({
            isLoggedIn: false,
            userName: null
        })
    }

    render(){
        if(this.state.isLoggedIn) {
            return(
                <div>
                {/* <span className="nav-link">
                    {this.state.userName}
                </span> */}
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
                    clientId={process.env.REACT_APP_LOCAL_GOOGLE_AUTH_CLIENT_ID}
                    buttonText="Login"
                />

            </div>
        )
    }
}

export default GoogleAuth;