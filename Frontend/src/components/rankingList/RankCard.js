import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class RankingCard extends Component {

    
    render() {
        return(
            <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">
                    <Link to={`/zipcodes/${this.props.data.zipcode}`} className="card-link">
                        {this.props.data.zipcode}
                    </Link>
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                    Average: {this.props.data.averageScore}
                    Food: {this.props.data.foodScore}
                    Education: {this.props.data.educationScore}
                    Traffic: {this.props.data.trafficScore}
                </p>
                
                <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>

            </div>
            </div>
        )
  }
}

export default RankingCard;
