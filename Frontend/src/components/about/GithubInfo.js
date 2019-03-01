import React from 'react';
import axios from 'axios';
import GithubUser from './GithubUser'

import './GithubInfo.css'
class GithubInfo extends React.Component {
    state = {
        Iucundus:   {commits: 0, issues: 0},
        AlienEdith: {commits: 0, issues: 0},
        zdwempe:    {commits: 0, issues: 0},   
        Graysless:  {commits: 0, issues: 0},
        cpe342:     {commits: 0, issues: 0},
        justindpnt: {commits: 0, issues: 0} 
    };
    // https://source.unsplash.com/100x100
    getGithubData = async () => {
        var members = new Array("Iucundus", "AlienEdith", "zdwempe", "Graysless", "cpe342", "justindpnt");
        for(var i in members){
            console.log();
            const username = members[i];
            const commits =  await axios.get("https://api.github.com/repos/Iucundus/AustinData/commits?author="+members[i]);
            const issues = await axios.get("https://api.github.com/repos/Iucundus/AustinData/issues?creator="+members[i]);
            console.log(commits);
            this.setState({[username]: {
                commits: commits.data.length,
                issues: issues.data.length
            }})
        }
    }

    componentDidMount(){
        this.getGithubData();
    };

    render() {

        var memberInfo = {
            John: {name: "John Koelling", img:"https://source.unsplash.com/100x100", desc:"bio, major, responsibilities", unittests: 0},
            Yixing: {name: "Yixing Wang", img:"https://source.unsplash.com/100x100", desc:"bio, major, responsibilities", unittests: 0},
            Zach: {name: "Zach Wempe", img:"https://source.unsplash.com/100x100", desc:"bio, major, responsibilities", unittests: 0},
            Canyon : {name: "Canyon Evenson", img:"https://source.unsplash.com/100x100", desc:"bio, major, responsibilities", unittests: 0},
            Grayson: {name: "Grayson Watkins", img:"https://source.unsplash.com/100x100", desc:"bio, major, responsibilities", unittests: 0},
            Justin : {name: "Justin DuPont", img:"https://source.unsplash.com/100x100", desc:"bio, major, responsibilities", unittests: 0},
        }
        console.log(this.state);
        return (
            <div className="githubInfo">
                <div className="row">
                    <GithubUser memberInfo={memberInfo.John} githubData={this.state.Iucundus}/>
                    <GithubUser memberInfo={memberInfo.Yixing} githubData={this.state.AlienEdith}/>
                    <GithubUser memberInfo={memberInfo.Zach} githubData={this.state.zdwempe}/>
                    <GithubUser memberInfo={memberInfo.Grayson} githubData={this.state.Graysless}/>
                    <GithubUser memberInfo={memberInfo.Canyon} githubData={this.state.cpe342}/>
                    <GithubUser memberInfo={memberInfo.Justin} githubData={this.state.justindpnt}/>
                </div>
            </div>
        );
    }
}

export default GithubInfo;