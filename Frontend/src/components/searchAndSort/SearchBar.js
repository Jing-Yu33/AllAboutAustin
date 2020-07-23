import React, { Component } from 'react';
import history from '../../history';

class SearchBar extends Component {
  state = {value: ""}

  onSearchBarSubmit(event){
    history.push(`/zipcodes/${this.state.value}`);
  }

  render() {
    return (
      <form onSubmit={(e) => this.onSearchBarSubmit(e)}>
        <div className="input-group mb-2">
          <label htmlFor="search"></label>
          <input type="text" className="form-control" aria-describedby="search" placeholder="Search By Zipcode" 
              name="term" value = {this.state.value} onChange = {(e) => this.setState({value: e.target.value})}
          />
          <div className="input-group-append">
              <button onClick={(e) => this.onSearchBarSubmit(e)} style={{zIndex: '0'}} className="btn btn-outline-primary" type="button"><i className="fas fa-search"></i></button>
          </div>
        </div>
      </form>
    );
}
}

export default SearchBar;
