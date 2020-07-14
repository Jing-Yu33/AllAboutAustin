import React from 'react';
import axios from 'axios';
import GithubUser from './GithubUser'

class GithubInfo extends React.Component {
    state = {
        Iucundus:   {commits: 0, issues: 0},
        AlienEdith: {commits: 0, issues: 0},
        zdwempe:    {commits: 0, issues: 0},   
        Graysless:  {commits: 0, issues: 0},
        cpe342:     {commits: 0, issues: 0},
        justindpnt: {commits: 0, issues: 0} 
    };
    
    getGithubData = async () => {
        var members = ["AlienEdith"];
        for(var i in members){
            var commitsNum = 0;
            var username = members[i];
            for(var j=1; j<5; j++){
                var commits = await axios.get(`https://api.github.com/repos/Iucundus/AustinData/commits`, {
                    params:{
                        per_page: 100,
                        page: j,
                        author: members[i],
                        access_token: this.GITHUB_ACCESS_TOKEN
                    }
                });
                commitsNum += commits.data.length;
            }
            var issues = await axios.get(`https://api.github.com/repos/Iucundus/AustinData/issues?creator=${members[i]}&access_token=${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`);
            this.setState({[username]: {
                commits: commitsNum,
                issues: issues.data.length
            }})
        }
    }

    componentDidMount(){
        this.getGithubData();
    };

    render() {

        var memberInfo = {
            Yixing: {name: "Yixing Wang", img:"https://i.groupme.com/1024x1023.jpeg.f149852036b94fc19f95c164aa24617d", 
            desc:"Grad Student",
            techCores:"Integrated Circuit and System",
            responsibilities:"Front End / Back End API / Front End Testing",
            unittests: 11},
        }
        return (
            <div className="githubInfo">
                <div className="row">
                    <GithubUser memberInfo={memberInfo.Yixing} githubData={this.state.AlienEdith}/>
                </div>
            </div>
        );
    }
}

export default GithubInfo;
