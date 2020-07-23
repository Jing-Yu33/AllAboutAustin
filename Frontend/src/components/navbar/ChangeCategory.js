import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ChangeCategory extends Component {
    render(){
      return(
          <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link className="nav-link" to="/find"><span style={{fontSize:'1.2em'}}>Find</span></Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/zipcodes"><span style={{fontSize:'1.2em'}}>Zipcodes</span></Link>
              </li>
          </ul>
        )
    }
}

export default ChangeCategory;
