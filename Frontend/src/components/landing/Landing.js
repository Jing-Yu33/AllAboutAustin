import React, { Component } from 'react';

import TopBar from "../navbar/TopBar";
import SurveyPrompt from "./SurveyPrompt";

import './Landing.css';

class Landing extends Component {

  render() {
    return (
      <div>
        <TopBar className="topBar"/>
        <SurveyPrompt className="surveyPrompt"/>
      </div>
    );
  }
}

export default Landing;
