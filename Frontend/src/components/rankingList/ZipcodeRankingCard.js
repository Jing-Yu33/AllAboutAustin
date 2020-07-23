import React, { Component } from 'react';
import {Rating} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
class ZipcodeRankingCard extends Component {
  render() {
    return(
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <Link to={`/zipcodes/${this.props.data.zipcode}`} className="card-link">
              {this.props.data.zipcode}
            </Link>
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            <Rating defaultRating={this.props.data.averageScore / 10} maxRating={5} disabled /> 
            Average: {this.props.data.averageScore}
            Food: {this.props.data.foodScore}
            Education: {this.props.data.educationScore}
            Traffic: {this.props.data.trafficScore}
            Reviews
          </p>
        </div>
      </div>
      )
  }
}

export default ZipcodeRankingCard;
