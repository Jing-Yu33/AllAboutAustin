import React, { Component } from 'react';
import ZipCodeComponent from '../zipcode/ZipCodeComponent'
class RankingList extends Component {

    getRankingCard = () => {
        return this.props.data.map( (zipcode) => {
            return <ZipCodeComponent key={zipcode.zipcode} zipcode={zipcode}/>
        })
    }
    
    render() {

        return(
            <div>
                <h4>Top 10 Zipcodes</h4>
                {this.getRankingCard()}
            </div>
        )
  }
}

export default RankingList;
