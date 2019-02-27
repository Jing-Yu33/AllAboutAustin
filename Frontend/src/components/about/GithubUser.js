import React from 'react';
import './GithubUser.css'
class GithubUser extends React.Component{
   
    render(){
        if(this.props.info){
        return(
            <div className="col-md-6 col-lg-4">
                <div className="card mb-5" style={{width: '18rem'}}>
                    <img className="card-img-top" alt="" src={this.props.img} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <a href={this.props.info.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Github Link</a>
                        <p className="card-text">{this.props.desc}</p>
                        <p className="card-text">Commits: {this.props.info.commits}</p>
                    </div>
                </div>
            </div>
        );
        }
        return <div></div>
    }
}

export default GithubUser;