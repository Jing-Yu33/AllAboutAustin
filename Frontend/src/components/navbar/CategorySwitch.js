import React, { Component } from 'react';

class CategorySwitch extends Component {
    render(){
        return(
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/food">Food</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Education</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Traffic</a>
                </li>
            </ul>
        )
    }
}

export default CategorySwitch;