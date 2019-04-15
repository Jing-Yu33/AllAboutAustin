import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import ZipcodesMap from '../map/ZipcodesMap';
import SearchBar from '../searchAndSort/SearchBar';
import SortForm from '../searchAndSort/SortForm';
// import SortFormForZipcodesPage from '../searchAndSort/SortFormForZipcodesPage';
import ZipcodeComponent from '../zipcode/ZipCodeComponent';
import PaginationButton from './PaginationButton';
import BasicFilters from './ZipcodesFilter/BasicFilters';
import MoreFilters from './ZipcodesFilter/MoreFilters';
import { GetAllZipcodes, GetFilteredZipcodes } from '../../actions';
import { compareByFood, compareByTraffic, compareByEducation, compareByAverage } from '../searchAndSort/sortFunction';

class ZipcodesPage extends Component {
   
    limit = 6; // # of zipcode components shown on a single page

    state = {
        currentPage: 1,
        category: null,
        order: null
    }

    // Intitialize
    async componentDidMount(){
      this.props.GetAllZipcodes();
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

      this.setState({
        category, order,
        currentPage: 1
      })
    }

    renderList = () => {
      const zipcodes = _.chunk(this.props.zipcodes, this.limit);
      return zipcodes[this.state.currentPage-1].map(zipcode => {
              return (
                <div className="col-lg-6" key={zipcode.zipcode}>
                  <ZipcodeComponent zipcode={zipcode} /> 
                </div>
              )
      })
    }

    renderZipcodes = () => {
      if(this.props.zipcodes.length === 0){
        return <div>No Zipcodes</div>
      }

      var total = 0;

      if(this.props.zipcodes){
        total = this.props.zipcodes.length;
      }

      return (
        <div>
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {this.renderList()}
              </div>
            </div>
            <div className="col-lg-4">
                Google Map Here??? Fixed? <br/>
            </div>
          </div>
          <div className="row mt-3 mb-3">
            <div className="col-lg-8 justify-content-center">
              <PaginationButton total={total} currentPage={this.state.currentPage} handlePageChange={this.handlePageChange}/>
            </div>
          </div>
        </div>
      )
    }

    // Handle Page changes
    handlePageChange = (page) => {
      this.setState({
        currentPage: page
      });
    };

    //Sort Down Form
    onSortDownSubmit = (value) => {
      this.sortZipcodes(value);
      // this.props.GetAllZipcodes(value.sortByCategory, value.sortByOrder);
    }

    // Handle Radio and Checkbox Form
    handleReset = async () => {
      this.props.GetAllZipcodes(this.state.category, this.state.order);
    }

    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({
        currentPage: 1
      })
      const { values } = this.props.filterForm;
      const { foodGt, trafficGt, educationGt, hospitals, cinemas } = this.props.filterForm.values
      const { category, order } = this.state;
      var regions = "";
      for(var property in values){
        if(property.includes("Austin") && values[property]){
            regions = regions.concat(property).concat(",")
        }
      }
      regions = regions.substring(0, regions.length-1);
      this.props.GetFilteredZipcodes(foodGt, trafficGt, educationGt, regions, hospitals, cinemas, category, order);  
    }

    render(){
      return(
        <div>
            <div className="mt-3">
              <ZipcodesMap zipcodes={this.props.zipcodes}/>
            </div>
          Problems: 1. When user FIRST change filter form, the list will rerender with average order (even though already change the order category)
          may caused by redux-form? => how to change that? 
          2. Need more manually testing? => the implementation is messy, tbh
          <div className="row mt-4">
              <div className="col-lg-4">
                  <SearchBar onSearchBarSubmit={this.onSearchBarSubmit}/>
              </div>
              <div className="col-lg-4">
                  <SortForm 
                    onSubmit={this.onSortDownSubmit} 
                    defaultCategory="average"
                  />
              </div>
          </div>

          <div> 
            <div className="col-lg-8">
                <BasicFilters 
                  handleSubmit={this.handleSubmit}
                  handleReset={this.handleReset}
                  initialValues={
                    {
                      foodGt: "0",
                      trafficGt: "0",
                      educationGt: "0",
                      // hospitals: false,
                      // cinemas: false
                    }
                  }
                  />
                <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  More Options
                </a>
             
              <div className="collapse" id="collapseExample">
                <MoreFilters 
                  handleSubmit={this.handleSubmit}
                  handleReset={this.handleReset}
                />
              </div>
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
        sortForm: state.form.ZipcodesSort
    }
}

export default connect(mapStateToProps, {
    GetAllZipcodes, GetFilteredZipcodes
})(ZipcodesPage)
