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
                    <br></br>
                <Field name="East Austin" value="East Austin" component="input"type="checkbox"/> 
                    East Austin
                    <br></br>
                <Field name="West Austin" value="West Austin" component="input"type="checkbox"/> 
                    West Austin
                    <br></br>
                <Field name="South Austin" value="South Austin" component="input" type="checkbox"/> 
                    South Austin
                    <br></br>
                <Field name="North Austin" value="North Austin" component="input" type="checkbox"/> 
                    North Austin
                    <br></br>
                <Field name="Northwest Austin" value="Northwest Austin" component="input" type="checkbox"/> 
                    Northwest Austin
                    <br></br>
                <Field name="Southeast Austin" value="Southeast Austin" component="input" type="checkbox"/> 
                    Southeast Austin
                    <br></br>
                <Field name="Southwest Austin" value="Southwest  Austin" component="input" type="checkbox"/> 
                    Southwest Austin
                    <br></br>
                    <br></br>
            </div>
        )
    }


    render() {
        const { handleSubmit } = this.props
        return(
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <br></br>
                    <label>Region</label>
                    {this.renderRegionCheckboxes()}
                    <label>Facilities</label>
                    <br></br>
                    <label>

                    <Field name="hospitals" component="input" type="checkbox"/>
                        Hospitals
                    </label>
                    <br></br>
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

