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
   
    state = {
        limit: 8,
        total: 81,
        pageCount: 11,
        currentPage: 1
    }

    async componentDidMount(){
      this.props.GetAllZipcodes();
    }

    onSortDownSubmit = async (value) => {
        this.props.GetAllZipcodes(value.sortByCategory, value.sortByOrder);
    }

    handleSubmit = (event) => {
      event.preventDefault();
      const { foodGt, trafficGt, educationGt } = this.props.filterForm.values
      this.props.GetFilteredZipcodes(foodGt, trafficGt, educationGt);  
    }

    renderList = () => {
        const zipcodes = _.chunk(this.props.zipcodes, this.state.limit);
        return zipcodes[this.state.currentPage-1].map(zipcode => {
                return (
                  <div className="col-lg-6" key={zipcode.zipcode}>
                    <ZipcodeComponent zipcode={zipcode} /> 
                  </div>
                )
        })
    }

    renderZipcodes = (total) => {
      if(this.props.zipcodes.length === 0){
        return <div>No Zipcodes</div>
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

    handlePageChange = (page) => {
        this.setState({
          currentPage: page
        });
    };

    render(){
      // if(this.props.zipcodes.length === 0){
      //   return <div>Loading...</div>
      // }
      var total = 0;

      if(this.props.zipcodes){
        total = this.props.zipcodes.length;
      }

      return(
        <div>
          <div className="row mt-4">
              <div className="col-lg-4">
                  <SearchBar onSearchBarSubmit={this.onSearchBarSubmit}/>
              </div>
              <div className="col-lg-4">
                  <SortForm onSubmit={this.onSortDownSubmit} defaultCategory="average"/>
              </div>
          </div>

          <div> 
            <div className="col-lg-8">
                <BasicFilters 
                  handleSubmit={this.handleSubmit}
                  initialValues={
                    {
                      foodGt: "0",
                      trafficGt: "0",
                      educationGt: "0",
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

          {this.renderZipcodes(total)}        

        </div>
      )
    }
}

const mapStateToProps = (state) => {
    return {
        zipcodes: Object.values(state.zipcodes),
        filterForm: state.form.ZipcodesBasicFilter
    }
}

export default connect(mapStateToProps, {
    GetAllZipcodes, GetFilteredZipcodes
})(ZipcodesPage)
