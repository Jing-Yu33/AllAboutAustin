import React, { Component } from 'react';
import RankingCard from './RankCard'
import { sortByFood, sortByTraffic, sortByEducation } from '../sortFunction'
class RankingList extends Component {

    
    render() {
        console.log(this.props.data);
        const getRankingCard = (defaultSort) => {
            switch (defaultSort){
                case "Food": this.props.data.sort(sortByFood); break;
                case "Education": this.props.data.sort(sortByEducation); break;
                case "Traffic": this.props.data.sort(sortByTraffic); break;
            }
            return this.props.data.map( (zipcode) => {
                return <RankingCard zipcode={zipcode.zipcode} food={zipcode.food} traffic={zipcode.traffic} education={zipcode.education}/>
            })
        }

        return(
            <div className="jumbotron">
                <h1>Ranking List</h1>
                {getRankingCard(this.props.sortByDefault)}
            </div>
        )
  }
}

export default RankingList;
