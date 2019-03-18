import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DataBase } from '../../apis/DataBase';

class ZipcodesPage extends Component {

    state = {
        zipcode: null
    }

    async componentDidMount(){
        const response = 
            await DataBase.get(`/zipcodes/${this.props.match.params.zipcode}`, {
                crossdomain: true
            })
        this.setState({
            zipcode: response.data
        })
    }


    render(){
        console.log(this.state.zipcode)
        if(!this.state.zipcode){
            return <div>Loading...</div>
        }

        return(
            <div>
                <h3>{this.state.zipcode.zipcode}</h3>
                <p>{this.state.zipcode.desc}</p>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         weight: state.weight
//     }
// }

export default connect(null)(ZipcodesPage)