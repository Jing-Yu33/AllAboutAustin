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

<div class="container py-3">
    <div class="card">
      <div class="row ">
        <div class="col-md-4">
            <img src="https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97400&w=400&h=400" class="w-100"/>
          </div>
          <div class="col-md-8 px-3">
            <div class="card-block px-3">
              <h4 class="card-title">{this.props.zipcode.zipcode}</h4>
              <p class="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <p class="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a href="#" class="btn btn-primary">Read More</a>
            </div>
          </div>

        </div>
      </div>
    </div>

*/}



<br></br>

    <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Zip Code : {this.props.zipcode.zipcode}</h1>
    {/*<p class="lead">{this.props.zipcode.description}</p>*/}

    <p>{this.props.zipcode.description}</p>
    <p>Wholisic Score : {this.props.zipcode.averageScore}</p>
    <p>Food Sore : {this.props.zipcode.foodScore}</p>
    <p>Traffic Score : {this.props.zipcode.trafficScore}</p>
    <p>Education Score : {this.props.zipcode.educationScore}</p>
    <br></br>

<div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel">
  
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-1z" data-slide-to="1"></li>
    <li data-target="#carousel-example-1z" data-slide-to="2"></li>
  </ol>
  
  
  <div class="carousel-inner" role="listbox">
    
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg" alt="First slide"/>
    </div>
    
    
    <div class="carousel-item">
      <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg" alt="Second slide"/>
    </div>
    
    
    <div class="carousel-item">
      <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="Third slide"/>
    </div>
    <br></br>
  </div>
  
  
  <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  
</div>


<div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Food</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Traffic</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Education</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
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
