import React, { Component } from 'react';
import { connect } from 'react-redux';

import './SliderBar.css'

class SliderBar extends Component {
    state = {
        value: this.props.weight[this.props.category]
    }

    render() {
        return(
                <div className="silder form-group">
                    <label htmlFor="formControlRange" className="text-center"> {this.props.category} </label>
                    <input 
                        type="range" className="form-control-range" id="formControlRange" 
                        value= { this.state.value }
                        onChange={(e)=>this.setState({value: e.target.value})}
                        onBlur ={(e)=>{this.props.onSliderBarFocusOut(this.props.category, e.target.value)}}        
                    />
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        weight: state.weight
    }
}
export default connect(mapStateToProps)(SliderBar);

