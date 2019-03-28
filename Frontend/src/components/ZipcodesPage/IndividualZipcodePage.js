import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <div>
                <h3>{this.props.zipcode.zipcode}</h3>
                <p>{this.props.zipcode.description}</p>
                <p>{this.props.zipcode.averageScore}</p>
                <p>{this.props.zipcode.foodScore}</p>
                <p>{this.props.zipcode.trafficScore}</p>
                <p>{this.props.zipcode.educationScore}</p>
                <p> ... images...layout</p>
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