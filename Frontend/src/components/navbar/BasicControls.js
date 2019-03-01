import React, { Component } from 'react';
import GoogleLogin from "react-google-login";

const responseGoogle = (response) => {
    console.log(response);
}

class BasicControls extends Component {
    render() {
        return(
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                    <GoogleLogin onSuccess={responseGoogle} onFailure={responseGoogle} clientId={"280689795193-ubapinqcg16ah7vlskd1oimoisf82bsm.apps.googleusercontent.com"}/>
                    {/* <a className="nav-link" href="#">Login</a> */}
                </li>
                {/* <li><GoogleLogin onSuccess={responseGoogle} onFailure={responseGoogle} clientId={"280689795193-ubapinqcg16ah7vlskd1oimoisf82bsm.apps.googleusercontent.com"}/></li> */}
            </ul>
   
        )
    }
}
export default BasicControls;

