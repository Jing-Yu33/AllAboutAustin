import React, { Component } from 'react';
import { connect } from 'react-redux';
import SliderBar from './SliderBar'
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
                <form id="survey-form">
                    <SliderBar category="Food" onSliderBarFocusOut={this.onSliderBarFocusOut}/>
                    <SliderBar category="Education" onSliderBarFocusOut={this.onSliderBarFocusOut}/>
                    <SliderBar category="Traffic" onSliderBarFocusOut={this.onSliderBarFocusOut}/>                   
                    <button onClick={() => this.onFormSubmit()} type="button" className="btn btn-outline-success btn-lg btn-block" data-dismiss="modal">Continue</button>
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

