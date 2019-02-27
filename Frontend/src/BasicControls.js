import React, { Component } from 'react';
import GoogleLogin from "react-google-login";
import './BasicControls.css';

const responseGoogle = (response) => {
    console.log(response);
}

class BasicControls extends Component {
    render() {
        return(
                <span className="basicControls"><a href="https://www.wikipedia.org">About</a> | <a href="https://facebook.com">Profile </a>
                     <GoogleLogin onSuccess={responseGoogle} onFailure={responseGoogle} clientId={"280689795193-ubapinqcg16ah7vlskd1oimoisf82bsm.apps.googleusercontent.com"}/>
                </span>


        )
    }
}
export default BasicControls;