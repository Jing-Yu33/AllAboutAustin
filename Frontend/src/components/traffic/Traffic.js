import React, { Component } from 'react';
import TopBar from "../navbar/TopBar";
import SearchBar from '../searchAndSort/SearchBar';
import SortDropdown from '../searchAndSort/SortDropdown';
import HeatMap from '../heatmap/HeatMap';
import RankingList from '../rankingList/RankingList';

class Traffic extends Component {
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
        var category = new Array("Food", "Traffic", "Education");
        var order = new Array("From Low to High", "From High to Low");
        return(
            <div>
                <TopBar />
                <div className="container">
                    <div>
                        <div style={{marginTop: '30px'}}>
                            <h1>Traffic</h1>
                        </div>
                        <div className='container'>
                            <div className="row">
                                <div className="col-3">
                                    <SearchBar onSearchBarSubmit={this.onSearchBarSubmit}/>
                                </div>
                                <div className="col-5"></div>
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-6">
                                            <SortDropdown name="Category" options={category}/>
                                        </div>
                                        <div className="col-6">
                                            <SortDropdown name="Order" options={order}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <HeatMap />
                        </div>
                        <div className="col-lg-4">
                            <RankingList />
                        </div>
                    </div>
                </div>
            </div>           

        );
    }
}

export default Traffic;
