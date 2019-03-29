import React, { Component } from 'react';
import { connect } from 'react-redux';

import './IndividualZipcodePage.css';
import CarouselComponent from './CarouselComponent'

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

    <div className="jumbotron jumbotron-fluid my-3">
  <div className="container">
    <h1 className="display-4">Zip Code : {this.props.zipcode.zipcode}</h1>
    <p className="lead">{this.props.zipcode.dd}</p>

    <p>{this.props.zipcode.description}</p>
    <p>Wholisic Score : {this.props.zipcode.averageScore}</p>
    <p>Food Sore : {this.props.zipcode.foodScore}</p>
    <p>Traffic Score : {this.props.zipcode.trafficScore}</p>
    <p>Education Score : {this.props.zipcode.educationScore}</p>

    <CarouselComponent/>

<div className="row">
  <div className="col-sm-4 d-flex align-items-stretch">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Food</h5>
        <p className="card-text">Placeholder, future will have list of food establishments in zip code</p>
        
      </div>
    </div>
  </div>
  <div className="col-sm-4 d-flex align-items-stretch">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Traffic</h5>
        <p className="card-text">Placeholder, future will have indicator for traffic congestion in zip code</p>
      </div>
    </div>
  </div>
  <div className="col-sm-4 d-flex align-items-stretch">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Education</h5>
        <p className="card-text">Placeholder, future will have list of schools in zip code</p>

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
