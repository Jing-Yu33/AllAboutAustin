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
            </div>

        )
    }


    render() {
        const { handleSubmit, pristine, submitting } = this.props
        return(
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <button class="btn btn-primary" type="submit" disabled={pristine || submitting}>
                        <i className="fas fa-filter"></i>
                    </button>
                    &nbsp;
                    <button class="btn btn-primary"type="button" disabled={pristine || submitting} onClick={this.reset}>
                        <i className="fas fa-redo"></i>
                    </button>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <label><strong>Food Score</strong></label>
                        <div>{this.renderRatingRatioOptions("foodGt")}</div>
                    </div>
                    <div className="col-lg-4">
                        <label><strong>Traffic Score</strong></label>
                        <div>{this.renderRatingRatioOptions("trafficGt")}</div>
                    </div>
                    <div className="col-lg-4">
                        <label><strong>Education Score</strong></label>
                        <div>{this.renderRatingRatioOptions("educationGt")}</div>
                    </div>
                </div>
            </form>
        )
    }
}
export default reduxForm({
    form: 'ZipcodesFilter', // a unique identifier for this form
    // destroyOnUnmount: false,
    // forceUnregisterOnUnmount: true
  })(BasicFilters)

