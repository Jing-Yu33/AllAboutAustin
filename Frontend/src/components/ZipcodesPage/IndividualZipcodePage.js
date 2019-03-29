import React, { Component } from 'react';
import { connect } from 'react-redux';

import './IndividualZipcodePage.css';
import CarouselComponent from './CarouselComponent'
import RowCards from './RowCards'

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

    <RowCards/>
    
  </div>
</div>
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
