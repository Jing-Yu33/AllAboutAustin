import React, { Component } from 'react';
import { connect } from 'react-redux';

import './IndividualZipcodePage.css';
import CarouselComponent from './CarouselComponent'
import RowCards from './RowCards'
import IndividualZipcodeMap from '../map/IndividualZipcodeMap';
import { GetOneZipcode } from '../../actions/index';

class IndividualZipcodePage extends Component {

    async componentDidMount(){
        this.props.GetOneZipcode(this.props.match.params.zipcode); 
    }

    render(){
        // console.log(this.props.zipcode);
        if(!this.props.zipcode){
            return <div>Loading... / No such zipcode, please check</div>
        }

        return(
          <div className="jumbotron jumbotron-fluid my-3">
            <div className="container">
            <h1 className="display-4">Zip Code : {this.props.zipcode.zipcode}</h1>
            <p>Other infomation here: region, description{this.props.zipcode.description}</p>
            <div className="row">
                <div className="col-lg-4">
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">Holisic Score : {this.props.zipcode.averageScore}</li>
                    <li className="list-group-item">Food Score : {this.props.zipcode.foodScore}</li>
                    <li className="list-group-item">Traffic Score : {this.props.zipcode.trafficScore}</li>
                    <li className="list-group-item">Education Score : {this.props.zipcode.educationScore}</li>
                    </ul>
                </div>
                <div className="col-lg-8">
                    <IndividualZipcodeMap zipcode={this.props.zipcode.zipcode}/>
                </div>
            </div>
            <CarouselComponent/>
            <RowCards food={this.props.zipcode.foodData} education={this.props.zipcode.educationData}/>

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
