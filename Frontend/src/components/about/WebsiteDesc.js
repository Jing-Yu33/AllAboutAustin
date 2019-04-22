import React, { Component } from 'react';

class WebsiteDesc extends Component {
    state = {
        value: null
    }

    render() {
        return(
            <div className="jumbotron">
                <h1 className="display-4">All About Austin</h1>
                <h3 className="display-6">Team Amber </h3>
                <a className="btn btn-success btn-sm" href="https://github.com/Iucundus/AustinData" role="button" target="_blank" rel="noopener noreferrer">Github Repo</a>
                <a className="btn btn-info btn-sm ml-3" href="https://documenter.getpostman.com/view/6614125/S1ETQG2B" role="button" target="_blank" rel="noopener noreferrer">API documentation</a> 
                <hr className="my-4" />
                <p className="lead">
                    <strong>Goal: </strong>
                </p>
                <p className="lead">Give insight to Austinites and travelers alike in regards to food, education, and traffic</p>
                <hr className="my-4" />
                <p>
                    Austin has been names by US News as the number one city to live in the United States for two years in a row.  With a diverse cultural environment, expanding business opportunity, and quirky charm, Austin has come into sights for companies, homeowners, and travelers alike.  All About Austin seeks to provide meaningful data to these users in the form of Food, Education, and Traffic by ranking areas and zip codes according to user preferences towards each of these metrics.
                </p>
            </div>
        )
    }
}
export default WebsiteDesc;

