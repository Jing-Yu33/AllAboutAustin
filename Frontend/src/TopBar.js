import React, { Component } from 'react';
import CategorySwitch from "./CategorySwitch";
import BasicControls from "./BasicControls";
import './BasicControls.css';
import './CategorySwitch.css';
import './TopBar.css';


class TopBar extends Component {

    render() {
        return(
               <div className="topBar"><CategorySwitch className="categorySwitch"/><BasicControls className="basicControls"/></div>
        )
    }
}
export default TopBar;