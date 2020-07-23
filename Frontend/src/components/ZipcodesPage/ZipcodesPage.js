import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import AllZipcodesMap from '../map/AllZipcodesMap';
import SearchBar from '../searchAndSort/SearchBar';
import SortForm from '../searchAndSort/SortForm';
import ZipCodeCardComponent from '../zipcode/ZipCodeCardComponent';
import ZipCodePageChangeButton from './ZipCodePageChangeButton';
import { GetAllZipcodes, GetFilteredZipcodes, GetUserZipcodes } from '../../actions';
import { compareByFood, compareByTraffic, compareByEducation, compareByAverage } from '../searchAndSort/sortFunction';


export const setCurrentPage = (page) => ({
    currentPage: page
});

export const setSortValue = (category, order) => ({
  category, order,
  currentPage: 1
});

class ZipcodesPage extends Component {
   
  limit = 8; // # of zipcode components shown on a single page

  state = {
    currentPage: 1,
    category: null,
    order: null
  }

  // Intitialize
  async componentDidMount(){
    this.props.GetAllZipcodes();
  }

  shouldComponentUpdate(nextProps, nextState){
    var formChange = JSON.stringify(nextProps.filterForm) !== JSON.stringify(this.props.filterForm)
    var zipcodesChange = JSON.stringify(nextProps.zipcodes) !== JSON.stringify(this.props.zipcodes)
    var categoryChange = nextState.category !== this.state.category
    var orderChange = nextState.order !== this.state.order
    var pageChange = nextState.currentPage !== this.state.currentPage
    return !formChange & (zipcodesChange | categoryChange | orderChange | pageChange) 
  }

  // Render Zipcode Components List and Pagination Button
  sortZipcodes = (value) => {
    const category = value.sortByCategory;
    const order = value.sortByOrder;
    switch(category){
      case "food":  this.props.zipcodes.sort(compareByFood); break;
      case "traffic": this.props.zipcodes.sort(compareByTraffic); break;
      case "education": this.props.zipcodes.sort(compareByEducation); break;
      case "average": this.props.zipcodes.sort(compareByAverage); break;
      default: this.props.zipcodes.sort(compareByAverage); break;
    }
    if(order === "asc"){
      this.props.zipcodes.reverse();
    }

    this.setState(setSortValue(category, order))
  }
  componentDidUpdate() {
    if (this.props.isSignedIn) {
      this.props.GetUserZipcodes(this.props.userId)
    }
  }
  renderList = () => {
    const zipcodes = _.chunk(this.props.zipcodes, this.limit);
    return zipcodes[this.state.currentPage-1].map(zipcode => {
      return (
        <div className="col-lg-3" key={zipcode.zipcode}>
          <ZipCodeCardComponent zipcode={zipcode} userZipcodes={this.props.userZipcodes}/> 
        </div>
      )
    })
  }

  renderZipcodes = () => {
    if(this.props.zipcodes.length === 0){
      return (
        <div className="d-flex justify-content-center display-5" style={{height: "200px"}}>
          No Result.
        </div>
      )
    }

    var total = 0;

    if(this.props.zipcodes){
      total = this.props.zipcodes.length;
    }

    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {this.renderList()}
            </div>
          </div>
        </div>
        <div className="mt-3 mb-3">
          <div className="text-center">
            <ZipCodePageChangeButton total={total} currentPage={this.state.currentPage} handlePageChange={this.handlePageChange} limit={this.limit}/>
          </div>
        </div>
      </div>
    )
  }

  // Handle Page changes
  handlePageChange = (e,{activePage}) => {
    this.setState(setCurrentPage(activePage))
  };

  //Sort Down Form
  onSortDownSubmit = (value) => {
    this.sortZipcodes(value);
  }

  // Handle Radio and Checkbox Form
  handleReset = async () => {
    this.props.GetAllZipcodes(this.state.category, this.state.order);
  }

  render(){
    return(
      <div>
        <h1>Zip Codes of Austin</h1>
        <p>Explore the various areas in Austin by filtering zip codes based on certain metrics and even geo-location.</p>
        <div className="mt-3">
          <AllZipcodesMap zipcodes={this.props.zipcodes}/>
        </div>
        <div className="row mt-4">
          <div className="col-lg-4">
            <SearchBar onSearchBarSubmit={this.onSearchBarSubmit}/>
          </div>
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
              <SortForm 
                onSubmit={this.onSortDownSubmit} 
                defaultCategory="average"
              />
          </div>
        </div>
        {this.renderZipcodes()}        
      </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        zipcodes: Object.values(state.zipcodes),
        filterForm: state.form.ZipcodesFilter,
        sortForm: state.form.ZipcodesSort,
        isSignedIn: state.auth.isSignedIn,
        userZipcodes: state.auth.userZipcodes,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, {
    GetAllZipcodes, GetFilteredZipcodes, GetUserZipcodes
})(ZipcodesPage)
