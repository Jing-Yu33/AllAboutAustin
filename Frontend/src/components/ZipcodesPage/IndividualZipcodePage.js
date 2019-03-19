import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GetOneZipcode } from '../../actions/index';

class IndividualZipcodePage extends Component {

    async componentDidMount(){
        this.props.GetOneZipcode(this.props.match.params.zipcode);
    }

    render(){
        if(!this.props.zipcode){
            return <div>Loading...</div>
        }

        return(
            <div>
                <h3>{this.props.zipcode.zipcode}</h3>
                <p>{this.props.zipcode.desc}</p>
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