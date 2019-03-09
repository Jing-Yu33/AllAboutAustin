import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../searchAndSort/SearchBar';
import SortDropdown from '../searchAndSort/SortDropdown';
import HeatMap from '../heatmap/HeatMap';
import RankingList from '../rankingList/RankingList';

import { sortCategory, sortOrder } from '../../actions'


class Food extends Component {
    state = ({
        term: ""
    })

    onSearchBarSubmit = async (term) => {
        console.log(term);
        // Get search term, query data from Database, display the data
        this.setState({
          term: term,
        });
      };

    componentDidUpdate(){
    }

    render(){
        var category = ["Food", "Traffic", "Education"];
        var order = ["Ascending", "Descending"];

        // Top 10 food data retrieve from our database API, should be already sorted by FOOD
        var data = [
            {zipcode: 78712, food: 7.2, traffic: 4.5, education: 7.3},
            {zipcode: 78731, food: 6.2, traffic: 5.5, education: 8.3},
            {zipcode: 78705, food: 5.2, traffic: 6.5, education: 6.3}
        ];

        return(
            <div style={{marginTop: '30px'}}>
                <h1>Food</h1>
                <div className="row mt-4">
                    <div className="col-lg-3">
                        <SearchBar onSearchBarSubmit={this.onSearchBarSubmit}/>
                    </div>
                    <div className="col-lg-5"></div>
                    <div className="col-lg-2 mb-sm-1">
                        <SortDropdown name="Category" default="Food" options={category} sortBy={this.props.sortCategory}/>
                    </div>
                    <div className="col-lg-2">
                        <SortDropdown name="Order" default="Descending" options={order} sortBy={this.props.sortOrder}/>
                     </div>
                </div>
                
                <div className="row mt-5">
                    <div className="col-lg-8">
                        <HeatMap />
                    </div>
                    <div className="col-lg-4">
                        <RankingList data={data} category={this.props.category} order={this.props.order}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        category: state.category,
        order: state.order
    }
}

export default connect(mapStateToProps, {
    sortCategory: sortCategory,
    sortOrder: sortOrder
})(Food);
