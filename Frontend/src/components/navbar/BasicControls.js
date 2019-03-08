import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

class BasicControls extends Component {

    render() {
            return(
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <GoogleAuth />
                    </li>
                </ul>
            )
    }
}
export default BasicControls;

