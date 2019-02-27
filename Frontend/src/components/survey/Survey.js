import React, { Component } from 'react';

import TopBar from "../navbar/TopBar";
import SliderBar from './SliderBar'
class Survey extends Component {

    render() {
        return(
            <div>
                <TopBar className="topBar"/>
                <div className="container">
                    <h1>Survey Page</h1>
                    <SliderBar />
                </div>
            </div>
        )
    }
}
export default Survey;

