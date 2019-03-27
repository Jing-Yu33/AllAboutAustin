import React from 'react';
import axios from 'axios';

class GithubStats extends React.Component {
    state={
        commits:    null,
        issues:     null,
        Unittests:  null
    }

    getData = async () => {
        var commits = await axios.get("https://api.github.com/repos/Iucundus/AustinData/commits?per_page=500");
        var issues = await axios.get("https://api.github.com/repos/Iucundus/AustinData/issues");
        this.setState({
            commits: commits.data.length,
            issues:  issues.data.length,
            unittests:  0
        })

    }


    componentDidMount(){
        this.getData();
    };


    render() {
        return (
        <ul className="list-group">
            <li className="list-group-item active">
                Github Stats 
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Total Commits <span className="badge badge-primary badge-pill">{this.state.commits}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Total Issues <span className="badge badge-primary badge-pill">{this.state.issues}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Total Unittests <span className="badge badge-primary badge-pill">{this.state.unittests}</span>
            </li>
        </ul>
        );
    }
}

export default GithubStats;