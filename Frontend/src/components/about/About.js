import React, { Component } from 'react';

import TopBar from "../navbar/TopBar";

import GithubInfo from './GithubInfo';

class About extends Component {

    render() {
        return(
            <div>
                <TopBar className="topBar"/>
                <div className="container">
                    <GithubInfo />
                </div>
            </div>
        )
    }
}
export default About;

