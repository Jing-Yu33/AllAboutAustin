import React, { Component } from 'react';
import RankingCard from './RankCard'
import { sortByFood, sortByTraffic, sortByEducation } from '../../sortFunction'

class RankingList extends Component {

    getRankingCard = (category, order) => {
        switch (category){
            case "Food": this.props.data.sort(sortByFood); break;
            case "Education": this.props.data.sort(sortByEducation, order); break;
            case "Traffic": this.props.data.sort(sortByTraffic, order); break;
            default: ;
        }

        if(order==="Ascending") this.props.data.reverse();

        return this.props.data.map( (zipcode) => {
            return <RankingCard key={zipcode.zipcode} zipcode={zipcode.zipcode} food={zipcode.food} traffic={zipcode.traffic} education={zipcode.education}/>
        })
    }
    
    render() {

        return(
            <div className="jumbotron">
                <h1>Ranking List</h1>
                {this.getRankingCard(this.props.category, this.props.order)}
            </div>
        )
  }
}

export default RankingList;
