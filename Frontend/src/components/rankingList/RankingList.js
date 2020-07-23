import React, { Component } from 'react';
import ZipCodeCardComponent from '../zipcode/ZipCodeCardComponent'
class RankingList extends Component {

    getRankingCard = () => {
        return this.props.data.map( (zipcode) => {
            return (
                <div className="col-lg-4" key={zipcode.zipcode}>
                    <ZipCodeCardComponent zipcode={zipcode}/>
                </div>
            )
        })
    }
    
    render() {
      return(
        <div>
          <div className="row">
            {this.getRankingCard()}
          </div>
        </div>
      )
  }
}

export default RankingList;
