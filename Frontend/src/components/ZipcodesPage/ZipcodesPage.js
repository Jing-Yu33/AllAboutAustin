import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Pagination from "react-paginating";
import _ from 'lodash';

import SearchBar from '../searchAndSort/SearchBar';
import SortForm from '../searchAndSort/SortForm';
import ZipcodeComponent from './ZipCodeComponent'
import { GetAllZipcodes } from '../../actions';


const limit = 8;
const pageCount = 11;
const total = 81;

class ZipcodesPage extends Component {
    state = {
        currentPage: 1
    }

    async componentDidMount(){
        this.props.GetAllZipcodes();
    }

    onSortDownSubmit = (value) => {
        this.props.GetAllZipcodes(value.sortByCategory, value.sortByOrder);
    }

    renderList = (zipcodes) => {
        return zipcodes[this.state.currentPage-1].map(zipcode => {
                return (
                    <ZipcodeComponent zipcode={zipcode}/> 
                )
        })
    }

    handlePageChange = (page) => {
        this.setState({
          currentPage: page
        });
    };

    renderPageButton = (currentPage) => {
        return (
            <Pagination
            total={total}
            limit={limit}
            pageCount={pageCount}
            currentPage={currentPage}
          >
            {({
              pages,
              currentPage,
              hasNextPage,
              hasPreviousPage,
              previousPage,
              nextPage,
              totalPages,
              getPageItemProps
            }) => (
              
              <div className="btn-group">
                <button className="btn btn-outline-primary"
                  {...getPageItemProps({
                    pageValue: 1,
                    onPageChange: this.handlePageChange
                  })}
                >
                  first
                </button>
  
                {hasPreviousPage && (
                  <button className="btn btn-outline-primary"
                    {...getPageItemProps({
                      pageValue: previousPage,
                      onPageChange: this.handlePageChange
                    })}
                  >
                    {"<"}
                  </button>
                )}
  
                {pages.map(page => {
                  let activePage = null;
                  if (currentPage === page) {
                    activePage = { backgroundColor: "#fdce09" };
                  }
                  return (
                    <button className="btn btn-outline-primary"
                      {...getPageItemProps({
                        pageValue: page,
                        key: page,
                        style: activePage,
                        onPageChange: this.handlePageChange
                      })}
                    >
                      {page}
                    </button>
                  );
                })}
  
                {hasNextPage && (
                  <button className="btn btn-outline-primary"
                    {...getPageItemProps({
                      pageValue: nextPage,
                      onPageChange: this.handlePageChange
                    })}
                  >
                    {">"}
                  </button>
                )}
  
                <button className="btn btn-outline-primary"
                  {...getPageItemProps({
                    pageValue: totalPages,
                    onPageChange: this.handlePageChange
                  })}
                >
                  last
                </button>
              </div>
              
            )}
            
          </Pagination>
        )
    }


    render(){
        const { currentPage } = this.state;
        const zipcodes = _.chunk(this.props.zipcodes, limit);
        if(zipcodes.length === 0){
            return <div>Loading...</div>
        }

        return(
            <div>
                TODOs:
                <ul>
                    <li>Sort Function: determine a default sorting category => new data field - average score?</li>
                    <li> <strike>set different pages: 8 item / page </strike></li>
                    <li>search function</li>
                    <li>Optional: add more filter checkbox?</li>
                    <li>interactive map</li>
                    <li>Layout</li>
                </ul>
                <SearchBar onSearchBarSubmit={this.onSearchBarSubmit}/>
                <SortForm onSubmit={this.onSortDownSubmit} defaultCategory="average"/>
                {this.renderList(zipcodes)}
                {this.renderPageButton(currentPage)}
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
