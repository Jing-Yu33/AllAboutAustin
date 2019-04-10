import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SortFormForZipcodesPage extends Component {
    constructor(props){
      super(props);
    }

    value = {
        sortByCategory: null,
        sortByOrder: null
    }

    onSubmit = () => {
        // console.log("here")
        // this.props.onSubmit(this.value);
        this.props.onSubmit(this.value);
    }

    render() {

        return (
          <form>
            <div className="input-group row">
              <div className="col-lg-6 mb-sm-2">
                <Field name="category" component="select"
                    className="custom-select"
                    onSelect={(e) => {
                        console.log(e.target.value)
                        this.value.sortByCategory = e.target.value;
                        // this.onSubmit();
                      }}
                    // defaultValue={this.props.defaultCategory}
                  >
                    <option value="average">Average</option>
                    <option value="food">Food</option>
                    <option value="traffic">Traffic</option>
                    <option value="education">Education</option>
                </Field>
              </div>
              <div className="col-lg-6">
                <Field name="order" component="select"
                    className="custom-select"
                    onChange={(e) => {
                        this.value.sortByOrder = e.target.value;
                    }}
                    // defaultValue="desc"
                  >
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </Field>
              </div>
            </div>
          </form>
        );
  }
}

export default reduxForm({
    form: 'ZipcodesSort', // a unique identifier for this form
    // destroyOnUnmount: false,
    // forceUnregisterOnUnmount: true
  })(SortFormForZipcodesPage)
