import React, { Component } from 'react';


class WebsiteDesc extends Component {
    state = {
        value: 50
    }

    render() {
        return(
            <div className="jumbotron">
                <h1 className="display-4">All About Austin</h1>
                <h3 className="display-6">Team Amber <a className="btn btn-success btn-sm" href="https://github.com/Iucundus/AustinData" role="button">Github Repo</a> </h3>
                <p className="lead">Purpose in one sentence.</p>
                <hr className="my-4" />
                <p>Detailed Purpose and Intended User</p>
            </div>
        )
    }
}
export default WebsiteDesc;

