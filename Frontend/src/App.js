import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import TopBar from "./components/navbar/TopBar";
import Landing from './components/landing/Landing'
import About from './components/about/About'
import Survey from './components/survey/Survey'
import Food from './components/food/Food'
import Education from './components/education/Education'
import Traffic from './components/traffic/Traffic'
import RecomPage from './components/recompage/RecomPage';

import ZipcodePage from './components/ZipcodesPage/ZipcodesPage';
import IndividualZipcodePage from './components/ZipcodesPage/IndividualZipcodePage';

import PageNotExists from './components/PageNotExists'

import history from './history';

class App extends Component {

  render() {
    return (
      <div>
        <Router history={history}>
        
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
              <Route path="/zipcodes" exact component={ZipcodePage} />
              <Route path="/zipcodes/:zipcode" exact component={IndividualZipcodePage} />
              <Route path="/*" component={PageNotExists} />
              </Switch>
            </div>
          </div>

        </Router>
      </div>
    );
  }
}

export default App;
