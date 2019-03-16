import React, { Component } from 'react';
import { connect } from 'react-redux';
import SliderBar from './SliderBar'
import { foodWeight, trafficWeight, educationWeight } from '../../actions';

class Survey extends Component {

    onFormSubmit = () => {
        this.props.history.push("/recommendation");
    }

    onSliderBarFocusOut = (category, value) => {
        switch(category){
            case "Food": this.props.foodWeight(value); break;
            case "Traffic": this.props.trafficWeight(value); break;
            case "Education": this.props.educationWeight(value); break;
            default: ;
        }
    }

    render() {
        return(
            <div style={{marginTop: '20vh'}}>
                <p>TODO: change the range to 0 to 10 integer (now 0 to 100), show exactly number when slides (requir JS)</p>
                <form id="survey-form">
                    <SliderBar category="Food" onSliderBarFocusOut={this.onSliderBarFocusOut}/>
                    <SliderBar category="Education" onSliderBarFocusOut={this.onSliderBarFocusOut}/>
                    <SliderBar category="Traffic" onSliderBarFocusOut={this.onSliderBarFocusOut}/>                    
                    <button onClick={() => this.onFormSubmit()} type="button" className="btn btn-outline-success btn-lg btn-block">Continue</button>
                </form>
            </div>
        )
    }
}
export default connect(null, {
    foodWeight, trafficWeight, educationWeight
})(Survey);

