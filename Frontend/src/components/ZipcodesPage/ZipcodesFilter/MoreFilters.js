import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class MoreFilters extends Component {

    reset = () => {
        this.props.reset();
        this.props.handleReset();
    }


    renderRegionCheckboxes = () => {
        return (
            <div>
                <Field name="Central Austin" value="Central Austin" component="input"type="checkbox"/> 
                    Central Austin
                <Field name="East Austin" value="East Austin" component="input"type="checkbox"/> 
                    East Austin
                <Field name="West Austin" value="West Austin" component="input"type="checkbox"/> 
                    West Austin
                <Field name="South Austin" value="South Austin" component="input" type="checkbox"/> 
                    South Austin
                <Field name="North Austin" value="North Austin" component="input" type="checkbox"/> 
                    North Austin
                <Field name="Northwest Austin" value="Northwest Austin" component="input" type="checkbox"/> 
                    Northwest Austin
                <Field name="Southeast Austin" value="Southeast Austin" component="input" type="checkbox"/> 
                    Southeast Austin
                <Field name="Southwest Austin" value="Southwest  Austin" component="input" type="checkbox"/> 
                    Southwest Austin
            </div>
        )
    }


    render() {
        const { handleSubmit } = this.props
        return(
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Region</label>
                    {this.renderRegionCheckboxes()}
                    <label>Facilities</label>
                    <label>
                    <Field name="hospitals" component="input" type="checkbox"/>
                        Hospitals
                    </label>
                    <label>
                    <Field name="cinemas" component="input" type="checkbox"/>
                        Cinemas
                    </label>
                </div>
            </form>

        )
    }
}
export default reduxForm({
    form: 'ZipcodesFilter' // a unique identifier for this form
  })(MoreFilters)

