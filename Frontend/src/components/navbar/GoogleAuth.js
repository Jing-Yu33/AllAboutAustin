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
                    clientId={"280689795193-ubapinqcg16ah7vlskd1oimoisf82bsm.apps.googleusercontent.com"}
                    buttonText="Login"
                />

            </div>
        )
    }
}

export default GoogleAuth;