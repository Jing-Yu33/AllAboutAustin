import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './SurveyPrompt.css';

class SurveyPrompt extends Component {

    // Todo: high resolution pictures, stylize the text
    render(){
        return(
            <div id="survey-prompt">
                <div id="landing-header">
                    <h1>All About Austin!</h1>
                    <Link to="/survey" className="btn btn-lg btn-success">Start</Link>
                </div>
                <ul className="slideshow">
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                </ul>
            </div>
        )
    }
}
export default SurveyPrompt;