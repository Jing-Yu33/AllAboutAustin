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
            <div className="form-group">
                <label htmlFor="search"></label>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Search" 
                    name="term" value = {this.state.value} onChange = {(e) => this.setState({value: e.target.value})}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
  }
}

export default SearchBar;
