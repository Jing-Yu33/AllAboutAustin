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
                    <div className="row">
                        <input style={{display: 'inline', width:'180px'}} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Search" 
                            name="term" value = {this.state.value} onChange = {(e) => this.setState({value: e.target.value})}
                        />
                        <button style={{display: 'inline'}} type="submit" className="btn btn-outline-primary"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
        );
  }
}

export default SearchBar;
