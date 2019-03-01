import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './components/landing/Landing'
import About from './components/about/About'
import Survey from './components/survey/Survey'
import Food from './components/food/Food'
import Education from './components/education/Education'
import Traffic from './components/traffic/Traffic'
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
        </BrowserRouter>
        <BrowserRouter>
            <Route path="/about" exact component={About} />
        </BrowserRouter>
        <BrowserRouter>
            <Route path="/survey" exact component={Survey} />
        </BrowserRouter>
        <BrowserRouter>
            <Route path="/food" exact component={Food} />
        </BrowserRouter>
        <BrowserRouter>
            <Route path="/education" exact component={Education} />
        </BrowserRouter>
        <BrowserRouter>
            <Route path="/traffic" exact component={Traffic} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
