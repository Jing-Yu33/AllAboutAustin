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
                <div className="mt-4">
                    <GithubStats />
                </div>
                <div className="mt-4">
                    <GithubInfo />
                </div>

                <div className="row">
                    <div className="col-12">
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

