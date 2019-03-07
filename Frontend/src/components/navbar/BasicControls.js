import React, { Component } from 'react';
import GoogleLogin from "react-google-login";
import { Link } from 'react-router-dom';

const responseGoogle = (response) => {
    console.log(response);
}

class BasicControls extends Component {
    render() {
        return(
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
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

