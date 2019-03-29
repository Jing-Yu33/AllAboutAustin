import React from 'react';

class GithubUser extends React.Component{
        
    render(){
        return(
            <div className="col-md-6 col-lg-4">
                <div className="card mb-5">
                    <img className="card-img-top" alt="" src={this.props.memberInfo.img} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.memberInfo.name}</h5>
                        <p className="card-text">{this.props.memberInfo.desc}</p>
                        <p className="card-text">{this.props.memberInfo.techCores}</p>
                        <p className="card-text">{this.props.memberInfo.responsibilities}</p>
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center card-text">
                                Commits <span className="badge badge-success badge-pill">{this.props.githubData.commits}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center card-text">
                                Issues <span className="badge badge-success badge-pill">{this.props.githubData.issues}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center card-text">
                                Unittests <span className="badge badge-success badge-pill">{this.props.memberInfo.unittests}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
 
    }
}

export default GithubUser;