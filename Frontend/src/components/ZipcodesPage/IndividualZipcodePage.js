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
            <p>{this.props.zipcode.description}</p>
<<<<<<< HEAD
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Wholisic Score : {this.props.zipcode.averageScore}</li>
              <li className="list-group-item">Food Score : {this.props.zipcode.foodScore}</li>
              <li className="list-group-item">Traffic Score : {this.props.zipcode.trafficScore}</li>
              <li className="list-group-item">Education Score : {this.props.zipcode.educationScore}</li>
=======
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Wholistic Rate : {this.props.zipcode.averageScore}</li>
              <li class="list-group-item">Food Rate : {this.props.zipcode.foodScore}</li>
              <li class="list-group-item">Traffic Rate : {this.props.zipcode.trafficScore}</li>
              <li class="list-group-item">Education Rate : {this.props.zipcode.educationScore}</li>
>>>>>>> c51aa72320bf65a2fc5051634f4c168d8b8d6709
            </ul>


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
