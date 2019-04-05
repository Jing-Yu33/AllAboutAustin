import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import SearchBar from '../searchAndSort/SearchBar';
import SortForm from '../searchAndSort/SortForm';
import ZipcodeComponent from '../zipcode/ZipCodeComponent';
import PaginationButton from './PaginationButton';
import BasicFilters from './ZipcodesFilter/BasicFilters';
import { GetAllZipcodes, GetFilteredZipcodes } from '../../actions';

class ZipcodesPage extends Component {
   
    limit = 8; // # of zipcode components shown on a single page

    state = {
        currentPage: 1
    }

    // Intitialize
    async componentDidMount(){
      this.props.GetAllZipcodes();
    }

    // Render Zipcode Components List and Pagination Button
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



    onSortDownSubmit = async (value) => {
        // const { foodGt, trafficGt, educationGt } = this.props.filterForm.values
        // this.props.GetFilteredZipcodes(foodGt, trafficGt, educationGt, value.sortByCategory, value.sortByOrder);
        this.props.GetAllZipcodes(value.sortByCategory, value.sortByOrder);
    }





    handleReset = async () => {
      this.props.GetAllZipcodes();
    }

    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({
        currentPage: 1
      })
      const { foodGt, trafficGt, educationGt} = this.props.filterForm.values
      this.props.GetFilteredZipcodes(foodGt, trafficGt, educationGt);  
    }





    render(){
      return(
        <div>
          TODOs: sort function will return all zipcode list, not based on the filter, may change that later
          <div className="row mt-4">
              <div className="col-lg-4">
                  <SearchBar onSearchBarSubmit={this.onSearchBarSubmit}/>
              </div>
              <div className="col-lg-4">
                  <SortForm 
                    // handleSubmit={this.handleSubmit} 
                    onSubmit={this.onSortDownSubmit} 
                    defaultCategory="average"
                    // initialValues={
                    //   {
                    //     sortBy: "average",
                    //     order: "desc"
                    //   }
                    // }
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
                      educationGt: "0"
                    }
                  }
                  />
                <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  More Options
                </a>
             
              <div className="collapse" id="collapseExample">
                More Options here: region in Austin? Whether has a Hospital? A cinema?
                <ul> Region
                  <li>North Austin</li>
                  <li>South Austin</li>
                  <li>...</li>
                </ul>
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
        filterForm: state.form.ZipcodesFilter
    }
}

export default connect(mapStateToProps, {
    GetAllZipcodes, GetFilteredZipcodes
})(ZipcodesPage)
