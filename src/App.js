import React, { Component } from 'react';
import './App.css';
import TopBar from "./TopBar";
import './TopBar.css';
import './SurveyPrompt';
import SurveyPrompt from "./SurveyPrompt";



class App extends Component {


  render() {
    return (
      <div>
        <TopBar className="topBar"/>
        <SurveyPrompt className="surveyPrompt"/>
      </div>
    );
  }
}

export default App;
