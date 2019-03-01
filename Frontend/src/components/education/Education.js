import React, { Component } from 'react';
import TopBar from "../navbar/TopBar";
import SearchBar from '../searchAndSort/SearchBar';
import SortDropdown from '../searchAndSort/SortDropdown';
import HeatMap from '../heatmap/HeatMap';
import RankingList from '../rankingList/RankingList';

class Education extends Component {
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
                        <div>
                            <SearchBar onSearchBarSubmit={this.onSearchBarSubmit}/>
                        </div>
                        <div>
                            <h1>Education</h1>
                        </div>

                        <div>
                            <SortDropdown name="category" options={category}/>
                        </div>
                        <div>
                            <SortDropdown name="order" options={order}/>
                        </div>
                    </div>
                    <div>
                        <HeatMap />
                    </div>
                    <div>
                        <RankingList />
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;
