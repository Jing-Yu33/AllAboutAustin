import React, { Component } from 'react';
import { connect } from 'react-redux';
import SliderBar from './SliderBar';
import SliderBarT from './SliderBarT'
import { foodWeight, trafficWeight, educationWeight } from '../../actions';
import history from '../../history';

class SurveyFrom extends Component {

    onFormSubmit = () => {
        history.push(
            `/recommendation?food=${this.props.weight.Food}&traffic=${this.props.weight.Traffic}&education=${this.props.weight.Education}`);
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
            <div>
                <h1>All About Austin Survey</h1>
                <p className="pb-2">
                Use the following sliders to indicate how important the following factors are during your search for an area in Austin.
                </p>
                <form id="survey-form">
                    <SliderBar category="Food" onSliderBarFocusOut={this.onSliderBarFocusOut}/>
                    <SliderBar category="Education" onSliderBarFocusOut={this.onSliderBarFocusOut}/>
                    <SliderBar category="Traffic" onSliderBarFocusOut={this.onSliderBarFocusOut}/>     
                    {/* <SliderBarT category="Traffic" onSliderBarFocusOut={this.onSliderBarFocusOut}/>             */}
                    <button onClick={() => this.onFormSubmit()} type="button" className="btn btn-outline-primary btn-lg btn-block" data-dismiss="modal">Continue</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        weight: state.weight
    }
}

export default connect(mapStateToProps, {
    foodWeight, trafficWeight, educationWeight
})(SurveyFrom);

