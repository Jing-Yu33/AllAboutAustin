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

    renderScoreList = () => {
        return (
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Holisic Score : {this.props.zipcode.averageScore}</li>
                <li className="list-group-item">Food Score : {this.props.zipcode.foodScore}</li>
                <li className="list-group-item">Traffic Score : {this.props.zipcode.trafficScore}</li>
                <li className="list-group-item">Education Score : {this.props.zipcode.educationScore}</li>
            </ul>
        )
    }

    renderFacilitesList = () =>{
        
        const { numOfCinemas, numOfHospitals, listOfHospitals, listOfCinemas } = this.props.zipcode
        
        const cinemasList = () => {
            if(numOfCinemas === 0){
                return <div>No cinemas in this zipcode</div>
            }
            const list = listOfCinemas.map( c => {
                return <div key={c}><i className="far fa-circle"></i> {c} </div>
            })

            return (
                <div>
                    {list}
                </div>
            )
        }

        const hospitalsList = () => {
            if(numOfHospitals === 0){
                return <div>No hospitals in this zipcode</div>
            }
            
            const list = listOfHospitals.map( h => {
                return <div key={h}><i className="far fa-circle"></i> {h} </div>
            })

            return (
                <div>
                    {list}
                </div>
            )
        }

        return (
            <div className="mt-sm-2">
                <strong>Facilities:</strong>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cinemas: 
                        {cinemasList()}
                    </li>
                    <li className="list-group-item">Hospitals: 
                        {hospitalsList()}
                    </li>
                </ul>
            </div>
        )
    }

    render(){
        if(!this.props.zipcode){
            return (
                <div>
                    <div className="spinner">
                        <div className="dot1"></div>
                        <div className="dot2"></div>
                    </div>
                    <span className="d-flex justify-content-center">Loading... or No such zipcode</span>
                </div>
            )
        }

        return(
          <div className="jumbotron jumbotron-fluid my-3">
            <div className="container">
            <h1 className="display-4">Zip Code : {this.props.zipcode.zipcode}</h1>
            <span className="text-secondary">
                Region : {this.props.zipcode.region} 
            </span>
            <p className="pt-2">{this.props.zipcode.description}</p>
            <div className="row">
                <div className="col-lg-4">
                    {this.renderScoreList()}
                    {this.renderFacilitesList()}
                </div>
                <div className="col-lg-8 mt-sm-4 mt-md-0">
                    <IndividualZipcodeMap zipcode={this.props.zipcode.zipcode} lat={this.props.zipcode.latitude} lng={this.props.zipcode.longtitude}/>
                </div>
            </div>
            <div>
                <CarouselComponent images={this.props.zipcode.images}/>
            </div>
            <RowCards food={this.props.zipcode.foodData} education={this.props.zipcode.educationData} lat={this.props.zipcode.latitude} lng={this.props.zipcode.longtitude}/>

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
