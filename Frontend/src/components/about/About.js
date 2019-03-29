import React, { Component } from 'react';

import WebsiteDesc from './WebsiteDesc';
import GithubInfo from './GithubInfo';
import GithubStats from './GithubStats';
import Datasource from './Datasource';
import Stack from './Stack';


class About extends Component {

    render() {
        return(
            <div>
                <div className="mt-4">
                    <WebsiteDesc />
                </div>
                <div className="mt-5">
                    <GithubInfo />
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <GithubStats />
                    </div>
                    <div className="col-md-8">
                        <Datasource />
                    </div>
                </div>

                <div className="mt-5">
                        <Stack />                   
                </div>
            </div>
        )
    }
}
export default About;

