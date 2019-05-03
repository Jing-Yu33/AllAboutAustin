import React, { Component } from 'react';

class NonHoveredZipCode extends Component {

    render() {
    	return(
        <div className="row-bl-2">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item active"><strong>Zipcode:</strong> </li>
                  <li className="list-group-item"><strong>Food Score:</strong> </li>
                  <li className="list-group-item"><strong>Traffic Score:</strong></li>
                  <li className="list-group-item"><strong>Education Score:</strong></li>
                </ul>
        </div>
        )
  }
}

export default NonHoveredZipCode;