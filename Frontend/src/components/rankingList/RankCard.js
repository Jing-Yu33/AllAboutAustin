import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class RankingCard extends Component {

    
    render() {
        return(
            <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">{this.props.zipcode}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Food: {this.props.food}</p>
                <p className="card-text">Education: {this.props.education}</p>
                <p className="card-text">Traffic: {this.props.traffic}</p>
                <Link to="#" className="card-link">Link</Link>
            </div>
            </div>
        )
  }
}

export default RankingCard;
