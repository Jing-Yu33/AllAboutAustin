import React, { Component } from 'react';

import SurveyPrompt from "./SurveyPrompt";

class Landing extends Component {

  render() {
    return (
      <div>
        <SurveyPrompt className="surveyPrompt"/>
      </div>
    );
  }
}

export default Landing;
