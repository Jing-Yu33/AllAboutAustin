import React from 'react';
import axios from 'axios';
import GithubUser from './GithubUser'

import './GithubInfo.css'
class GithubInfo extends React.Component {
    state = {statistics: {}};

    getInfo = async () => {
        const response = 
                    await axios.get("https://api.github.com/repos/Iucundus/AustinData/stats/contributors", {});
        
        var mapStat = {};
        response.data.map((user) => {
            var username = user.author.login;
            mapStat[username] = {
                url: user.author.html_url,
                commits: user.total
                }
            });
            this.setState({statistics: mapStat});
    };


    componentDidMount(){
        this.getInfo();
    };

    render() {
        return (
            <div className="githubInfo">
                <div className="row">
                    <GithubUser name="John" img="https://source.unsplash.com/150x150" desc="blahblahblah" info={this.state.statistics.Iucundus}/>
                    <GithubUser name="Zach" img="https://source.unsplash.com/150x150" desc="blahblahblah" info={this.state.statistics.zdwempe}/>
                    <GithubUser name="Yixing" img="https://source.unsplash.com/150x150" desc="blahblahblah" info={this.state.statistics.zdwempe}/>
                    <GithubUser name="Canyon" img="https://source.unsplash.com/150x150" desc="blahblahblah" info={this.state.statistics.zdwempe}/>
                    <GithubUser name="Justin" img="https://source.unsplash.com/150x150" desc="blahblahblah" info={this.state.statistics.Iucundus}/>
                    <GithubUser name="Grayson" img="https://source.unsplash.com/150x150" desc="blahblahblah" info={this.state.statistics.Iucundus}/>
                </div>
            </div>
        );
    }
}

export default GithubInfo;