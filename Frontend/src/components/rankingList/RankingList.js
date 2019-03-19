import React, { Component } from 'react';
import RankingCard from './RankCard'
import { sortByFood, sortByTraffic, sortByEducation } from '../../sortFunction'

class RankingList extends Component {

    getRankingCard = (data) => {
        return this.props.data.map( (zipcode) => {
            return <RankingCard key={zipcode.zipcode} data={zipcode}/>
        })
    }
    
    render() {

        return(
            <div className="jumbotron">
                <h1>Ranking List</h1>
                {this.getRankingCard()}
            </div>
        )
  }
}

export default RankingList;
