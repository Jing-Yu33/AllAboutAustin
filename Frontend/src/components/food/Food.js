import React, { Component } from 'react';
import SearchBar from '../searchAndSort/SearchBar';
import SortDropdown from '../searchAndSort/SortDropdown';
import HeatMap from '../heatmap/HeatMap';
import RankingList from '../rankingList/RankingList';

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
        // STATE updated,
        // redirect new page?? or hide heatmap, show new component??

        // What's the meaning of search here???
    }

    render(){
        var category = ["Food", "Traffic", "Education"];
        var order = ["From Low to High", "From High to Low"];

        var data = [
            {zipcode: 78705, food: 5.2, traffic: 6.5, education: 6.3},
            {zipcode: 78731, food: 6.2, traffic: 5.5, education: 8.3},
            {zipcode: 78712, food: 7.2, traffic: 4.5, education: 7.3}
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
                        <SortDropdown name="Category" options={category}/>
                    </div>
                    <div className="col-lg-2">
                        <SortDropdown name="Order" options={order}/>
                     </div>
                </div>
                
                <div className="row mt-5">
                    <div className="col-lg-8">
                        <HeatMap />
                    </div>
                    <div className="col-lg-4">
                        <RankingList data={data} sortByDefault="Food" sortByOption=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Food;
