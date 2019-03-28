import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../searchAndSort/SearchBar';
import SortForm from '../searchAndSort/SortForm';
import { GetAllZipcodes } from '../../actions';
class ZipcodesPage extends Component {

    async componentDidMount(){
        this.props.GetAllZipcodes();
    }

    onSortDownSubmit = (value) => {
        this.props.GetAllZipcodes(value.sortByCategory, value.sortByOrder);
    }

    renderList = () => {
        return this.props.zipcodes.map(zipcode => {
            return (
                <div key={zipcode.zipcode}>
                    <h4>{zipcode.zipcode}</h4>
                    <p>Should be a card contains corresponding information<br/>
                        The title of the card should be a link to IndividualZipcodePage
                    </p>
                </div>
            )
        })
    }

    render(){
        if(!this.props.zipcodes){
            return <div>Loading...</div>
        }

        return(
            <div>
                TODOs:
                <ul>
                    <li>Sort Function: determine a default sorting category => new data field - average score?</li>
                    <li>set different pages: 10 item / page</li>
                    <li>search function</li>
                    <li>Optional: add more filter checkbox?</li>
                    <li>interactive map</li>
                    <li>Layout</li>
                </ul>
                <SearchBar onSearchBarSubmit={this.onSearchBarSubmit}/>
                <SortForm onSubmit={this.onSortDownSubmit} defaultCategory="average"/>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        zipcodes: Object.values(state.zipcodes)
    }
}

export default connect(mapStateToProps, {
    GetAllZipcodes
})(ZipcodesPage)