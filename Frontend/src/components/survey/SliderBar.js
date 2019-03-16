import React, { Component } from 'react';
import './SliderBar.css'

class SliderBar extends Component {
    state = {
        value: 50
    }

    render() {
        return(
                <div className="silder form-group">
                    <label htmlFor="formControlRange" className="text-center"> {this.props.category} </label>
                    <input 
                        type="range" className="form-control-range" id="formControlRange" 
                        value={this.state.value}
                        onChange={(e)=>this.setState({value: e.target.value})}
                        onBlur ={(e)=>{this.props.onSliderBarFocusOut(this.props.category, this.state.value)}}        
                    />
                </div>
        )
    }
}
export default SliderBar;

