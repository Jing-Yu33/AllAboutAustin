import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TopBar from "./components/navbar/TopBar";
import Landing from './components/landing/Landing'
import About from './components/about/About'
import Survey from './components/survey/Survey'
import Food from './components/food/Food'
import Education from './components/education/Education'
import Traffic from './components/traffic/Traffic'
import RecomPage from './components/recompage/RecomPage';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
        
          <div>
            <TopBar />
            <div className="container">
              <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/about" exact component={About} />
              <Route path="/survey" exact component={Survey} />
              <Route path="/food" exact component={Food} />
              <Route path="/education" exact component={Education} />
              <Route path="/traffic" exact component={Traffic} />
              <Route path="/recommendation" exact component={RecomPage} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
