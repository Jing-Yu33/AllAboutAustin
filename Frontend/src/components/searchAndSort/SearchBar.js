import React, { Component } from 'react';

class SearchBar extends Component {
    state = {value: ""}

    onSearchBarSubmit(event){
        event.preventDefault();
        this.props.onSearchBarSubmit(this.state.value);
    }

    render() {
        return (
            <form onSubmit={(e) => this.onSearchBarSubmit(e)}>
                <div className="input-group mb-2">
                    <label htmlFor="search"></label>
                    <input type="text" className="form-control" aria-describedby="search" placeholder="Search" 
                        name="term" value = {this.state.value} onChange = {(e) => this.setState({value: e.target.value})}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary" type="button"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
        );
  }
}

export default SearchBar;
