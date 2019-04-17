import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class BasicFilters extends Component {

    reset = () => {
        this.props.reset();
        this.props.handleReset();
    }


    renderRatingRatioOptions = (name) => {
        return (
            <div>
                <label>
                    <Field name={name} value="8" component="input" type="radio"/>
                    > 8
                </label>
                <label>
                    <Field name={name} value="5" component="input" type="radio"/>
                    >5
                </label>
                <label>
                    <Field name={name} value="2" component="input" type="radio"/>
                    >2
                </label>
                <br></br>
            </div>

        )
    }


    render() {
        const { handleSubmit, pristine, submitting } = this.props
        return(
            <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                Need Styling! in one row and modify the text
                <div>
                    
                </div>
                <div>
                    <label>Food Score</label>
                    {this.renderRatingRatioOptions("foodGt")}
                    <label>Traffic Score</label>
                    {this.renderRatingRatioOptions("trafficGt")}
                    <label>Education Score</label>
                    {this.renderRatingRatioOptions("educationGt")}
                </div>
                    <br></br>
                    <button type="submit" disabled={pristine || submitting}>
                        Submit
                    </button>
                    <button type="button" disabled={pristine || submitting} onClick={this.reset}>
                        Clear Values
                    </button>
            </form>
            <br></br>


        )
    }
}
export default reduxForm({
    form: 'ZipcodesFilter', // a unique identifier for this form
    // destroyOnUnmount: false,
    // forceUnregisterOnUnmount: true
  })(BasicFilters)

