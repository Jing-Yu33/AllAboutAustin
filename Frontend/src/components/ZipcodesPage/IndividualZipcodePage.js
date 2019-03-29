import React, { Component } from 'react';
import { connect } from 'react-redux';

import './IndividualZipcodePage.css';

import { GetOneZipcode } from '../../actions/index';

class IndividualZipcodePage extends Component {

    async componentDidMount(){
        this.props.GetOneZipcode(this.props.match.params.zipcode); 
    }

    render(){
        console.log(this.props.zipcode);
        if(!this.props.zipcode){
            return <div>Loading... / No such zipcode, please check</div>
        }

        return(
            <React.Fragment>

            
{/*
            <div>
                <h3>{this.props.zipcode.zipcode}</h3>
                <p>{this.props.zipcode.description}</p>
                <p>{this.props.zipcode.averageScore}</p>
                <p>{this.props.zipcode.foodScore}</p>
                <p>{this.props.zipcode.trafficScore}</p>
                <p>{this.props.zipcode.educationScore}</p>
                <p> ... images...layout</p>
            </div>
*/}
{/* 

commented out old card

<div className="container py-3">
    <div className="card">
      <div className="row ">
        <div className="col-md-4">
            <img src="https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97400&w=400&h=400" className="w-100"/>
          </div>
          <div className="col-md-8 px-3">
            <div className="card-block px-3">
              <h4 className="card-title">{this.props.zipcode.zipcode}</h4>
              <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>

        </div>
      </div>
    </div>

*/}



<br></br>

    <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Zip Code : {this.props.zipcode.zipcode}</h1>
    {/*<p className="lead">{this.props.zipcode.description}</p>*/}

    <p>{this.props.zipcode.description}</p>
    <p>Wholisic Score : {this.props.zipcode.averageScore}</p>
    <p>Food Sore : {this.props.zipcode.foodScore}</p>
    <p>Traffic Score : {this.props.zipcode.trafficScore}</p>
    <p>Education Score : {this.props.zipcode.educationScore}</p>
    <br></br>

<div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
  
  <ol className="carousel-indicators">
    <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
    <li data-target="#carousel-example-1z" data-slide-to="1"></li>
    <li data-target="#carousel-example-1z" data-slide-to="2"></li>
  </ol>
  
  
  <div className="carousel-inner" role="listbox">
    
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg" alt="First slide"/>
    </div>
    
    
    <div className="carousel-item">
      <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg" alt="Second slide"/>
    </div>
    
    
    <div className="carousel-item">
      <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="Third slide"/>
    </div>
    <br></br>
  </div>
  
  
  <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  
</div>


<div className="row">
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Food</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Traffic</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Education</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>

  </div>

  

  
</div>
 








            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        zipcode: state.zipcodes[ownProps.match.params.zipcode]
    }
}

export default connect(mapStateToProps, {
    GetOneZipcode
})(IndividualZipcodePage)
