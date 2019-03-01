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
                <form>
                    <div className="form-group" style={{marginTop: '20px'}}>
                        <div className="form-group">
                            <select className="custom-select" name={this.props.name}>
                                <option defaultValue>By {this.props.name}</option>
                                {OptionList}
                            </select>
                        </div>
                    </div>
                </form>
                
                

                
           
        );
  }
}

export default SortDropdown;
