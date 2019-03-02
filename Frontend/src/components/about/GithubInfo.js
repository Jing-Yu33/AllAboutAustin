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
            John: {name: "John Koelling", img:"https://i.groupme.com/386x386.png.eb31e67ea3f341d380e5533ada8a8e2f", desc:"bio, major, responsibilities", unittests: 0},
            Yixing: {name: "Yixing Wang", img:"https://i.groupme.com/1024x1023.jpeg.f149852036b94fc19f95c164aa24617d", desc:"bio, major, responsibilities", unittests: 0},
            Zach: {name: "Zach Wempe", img:"https://i.groupme.com/1600x1200.jpeg.7bf9bdf02dde4972b0d110ae50b78c81", desc:"bio, major, responsibilities", unittests: 0},
            Canyon : {name: "Canyon Evenson", img:"https://scontent.fftw1-1.fna.fbcdn.net/v/t1.0-9/21032517_1553099121380179_5886108116509517626_n.jpg?_nc_cat=102&_nc_ht=scontent.fftw1-1.fna&oh=21307b39088dd22e0d25ac1063485b17&oe=5D21447F", desc:"bio, major, responsibilities", unittests: 0},
            Grayson: {name: "Grayson Watkins", img:"https://i.groupme.com/750x750.jpeg.eb60b11994674894a2d9bc0f8a20feb8", desc:"bio, major, responsibilities", unittests: 0},
            Justin : {name: "Justin DuPont", img:"https://i.groupme.com/731x731.jpeg.7b6d5ab070554ed1b7c6d81d1bdb71fb", desc:"test", unittests: 0},
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
