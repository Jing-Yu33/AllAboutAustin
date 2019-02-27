import React, { Component } from 'react';
import CategorySwitch from "./CategorySwitch";
import BasicControls from "./BasicControls";
import './TopBar.css';


class TopBar extends Component {

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/">AAA</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <CategorySwitch />
                        <BasicControls />
                    </div>
                </div>
            </nav>            
        )
    }
}
export default TopBar;

