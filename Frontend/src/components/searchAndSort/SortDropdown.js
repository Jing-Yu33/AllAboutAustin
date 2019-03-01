import React, { Component } from 'react';

class SortDropdown extends Component {
    state = {value: ""}

    options = () => {
        console.log(this.props.options.length);
        const OptionList = this.props.options.map((option) => {
            return <option value={option}>{option}</option>
        })
    }
    
    render() {
        const OptionList = this.props.options.map((option) => {
            return <option value={option}>{option}</option>
        })

        return (
                <div className="input-group">
                    <select className="custom-select" name={this.props.name}>
                        <option defaultValue>Sort by</option>
                        {OptionList}
                    </select>
                </div>
        );
  }
}

export default SortDropdown;
