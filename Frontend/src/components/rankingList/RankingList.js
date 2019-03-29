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
                <h4>ToP 10 zipcodes with Best Food/traffic/eduction In Austin</h4>
                {this.getRankingCard()}
            </div>
        )
  }
}

export default RankingList;
