import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GetAllZipcodes } from '../../actions/index';

class IndividualZipcodePage extends Component {

    async componentDidMount(){
        this.props.GetAllZipcodes("");
    }

    renderList = () => {
        return this.props.zipcodes.map(zipcode => {
            return (
                <div key={zipcode.zipcode}>
                    <h4>{zipcode.zipcode}</h4>
                    <p>Should be a card contains corresponding information<br/>
                        The title of the card should be a link to IndividualZipcodePage
                    </p>
                </div>
            )
        })
    }

    render(){
        if(!this.props.zipcodes){
            return <div>Loading...</div>
        }

        return(
            <div>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        zipcodes: Object.values(state.zipcodes)
    }
}

export default connect(mapStateToProps, {
    GetAllZipcodes
})(IndividualZipcodePage)