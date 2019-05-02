import React from 'react';
import axios from 'axios';

class GithubStats extends React.Component {
    
    state={
        commits:    null,
        issues:     null,
        unittests:  36
    }

    getData = async () => {
        var commitsNum = 0;
        for(var i=1; i<5; i++){
            var commits = await axios.get(`https://api.github.com/repos/Iucundus/AustinData/commits?per_page=100&page=${i}&access_token=${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`);
            commitsNum += commits.data.length;
        }
        var issues = await axios.get(`https://api.github.com/repos/Iucundus/AustinData/issues?access_token=${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`);
        this.setState({
            commits: commitsNum,
            issues:  issues.data.length,
        })

    }


    componentDidMount(){
        this.getData();
    };


    render() {
        return (
        <div className="list-group list-group-horizontal-md">
            <div className="list-group-item active flex-fill">
                Github Stats 
            </div>
            <li className="list-group-item d-flex justify-content-between align-items-center flex-fill">
                Total Commits <span className="badge badge-primary badge-pill">{this.state.commits}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center flex-fill">
                Total Issues <span className="badge badge-primary badge-pill">{this.state.issues}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center flex-fill">
                Total Unittests <span className="badge badge-primary badge-pill">{this.state.unittests}</span>
            </li>
        </div>
        );
    }
}

export default GithubStats;