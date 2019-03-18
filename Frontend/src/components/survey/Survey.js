import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
class Survey extends Component {

    render() {
        return(
            <div style={ {marginTop: '20vh'} }>
                <SurveyForm />
            </div>
        )
    }
}
export default Survey

