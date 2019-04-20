import React, { Component } from 'react';

class SortForm extends Component {

    constructor(props){
      super(props);
      this.ElementRef = React.createRef();
    }

    value = {
        sortByCategory: this.props.defaultCategory,
        sortByOrder: null
    }

    onSubmit = () => {
        this.props.onSubmit(this.value);
    }

    render() {

        return (
          <form onChange={this.onSubmit}>
            <div className="input-group row">
              <div className="col-lg-6 mb-sm-2">
                <select
                    className="custom-select"
                    onChange={(e) => {
                        this.value.sortByCategory = e.target.value;
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
                    }}
                    defaultValue="desc"
                  >
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>
              </div>
            </div>
          </form>
        );
  }
}

export default SortForm
