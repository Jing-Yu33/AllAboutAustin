import React, { Component } from 'react';

class SortForm extends Component {
    
    value = {
        sortByCategory: null,
        sortByOrder: null
    }

    onSubmit = () => {
        this.props.onSubmit(this.value);
    }

    render() {

        return (
          <form>
            <div className="input-group row">
              <div className="col-lg-6 mb-sm-2">
                <select
                    className="custom-select"
                    onChange={(e) => {
                        this.value.sortByCategory = e.target.value;
                        this.onSubmit()
                      }}
                    defaultValue={this.props.defaultCategory}
                  >
                    <option value="average">Average</option>
                    <option value="food">Food</option>
                    <option value="traffic">Traffic</option>
                    <option value="education">Education</option>
                </select>
              </div>
              <div className="col-lg-6">
                <select
                    className="custom-select"
                    onChange={(e) => {
                        this.value.sortByOrder = e.target.value;
                        this.onSubmit()
                    }}
                    defaultValue="desc"
                  >
                    <option defaultValue="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>
              </div>
            </div>
          </form>
        );
  }
}

export default SortForm
