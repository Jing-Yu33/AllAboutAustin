import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ChangeCategory extends Component {
    render(){
        return(
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/food">Food</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/education">Education</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/traffic">Traffic</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/zipcodes">Zipcodes</Link>
                </li>
            </ul>
        )
    }
}

export default ChangeCategory;
