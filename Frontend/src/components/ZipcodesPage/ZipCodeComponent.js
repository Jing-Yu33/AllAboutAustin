import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class ZipCodeComponent extends Component {

    render() {
        return(
  <div className="my-3 card">
  <div className="card-header">
               
                            <h4><Link to={`/zipcodes/${this.props.zipcode.zipcode}`}>{this.props.zipcode.zipcode}</Link></h4>
  
  </div>
  <div className="card-body" >
    <h5 className="card-title">Placeholder for Region Associated with Zipcode</h5>

      <img src="" className="img-fluid" alt="Responsive image" />
  </div>
</div>
        )
  }
}

export default ZipCodeComponent;