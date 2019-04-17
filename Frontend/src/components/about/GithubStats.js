import React from 'react';
import axios from 'axios';

class GithubStats extends React.Component {
    GITHUB_ACCESS_TOKEN =  "29141c907671b2c7b85ae8bfa45b1c16f7e864a7";
    state={
        commits:    null,
        issues:     null,
        Unittests:  null
    }

    getData = async () => {
        var commitsNum = 0;
        for(var i=1; i<5; i++){
            var commits = await axios.get(`https://api.github.com/repos/Iucundus/AustinData/commits?per_page=100&page=${i}&${this.GITHUB_ACCESS_TOKEN}`);
            commitsNum += commits.data.length;
        }
        var issues = await axios.get(`https://api.github.com/repos/Iucundus/AustinData/issues?access_token=${this.GITHUB_ACCESS_TOKEN}`);
        this.setState({
            commits: commitsNum,
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