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
                     &nbsp; > 8 &nbsp;
                </label>
                <label>
                    <Field name={name} value="5" component="input" type="radio"/>
                    &nbsp; > 5 &nbsp;
                </label>
                <label>
                    <Field name={name} value="2" component="input" type="radio"/>
                    &nbsp; > 2 &nbsp;
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
                    <label><strong>Food Score</strong></label>
                    {this.renderRatingRatioOptions("foodGt")}
                    <label><strong>Traffic Score</strong></label>
                    {this.renderRatingRatioOptions("trafficGt")}
                    <label><strong>Education Score</strong></label>
                    {this.renderRatingRatioOptions("educationGt")}
                </div>
                    <br></br>
                    <div>
                    <button class="btn btn-primary" type="submit" disabled={pristine || submitting}>
                        Submit
                    </button>
                    &nbsp;
                    <button class="btn btn-primary"type="button" disabled={pristine || submitting} onClick={this.reset}>
                        Clear Values
                    </button>
                    </div>
            </form>
            <br></br>
            </div>



        )
    }
}
export default reduxForm({
    form: 'ZipcodesFilter', // a unique identifier for this form
    // destroyOnUnmount: false,
    // forceUnregisterOnUnmount: true
  })(BasicFilters)

