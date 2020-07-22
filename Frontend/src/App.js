import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import TopBar from "./components/navbar/TopBar";
import Landing from './components/landing/Landing'
import About from './components/about/About'
import Profile from './components/profile/Profile'
import Survey from './components/survey/Survey'
import Food from './components/food/Food'
import Education from './components/education/Education'
import Traffic from './components/traffic/Traffic'
import Reccomendations from './components/Reccomendations/Reccomendations';

import ZipcodePage from './components/ZipcodesPage/ZipcodesPage';
import Find from './components/ZipcodesPage/Find';
import IndividualZipcodePage from './components/ZipcodesPage/IndividualZipcodePage';

import PageNotExists from './components/PageNotExists'
import Footer from './components/Footer';
import ScrollUpButton from './components/ScrollUpButton';
import history from './history';

import { Container } from 'semantic-ui-react'
import './App.css'
import ZipcodesPage from './components/ZipcodesPage/ZipcodesPage';

class App extends Component {

  render() {
    return (
      <Container fluid>
        <Router history={history}>
        
          <div >
            <TopBar />
            <ScrollUpButton />
            <div style={{marginTop: '70px'}}>
              <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/about" exact component={About} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/survey" exact component={Survey} />
              <Route path="/food" exact component={Food} />
              <Route path="/education" exact component={Education} />
              <Route path="/traffic" exact component={Traffic} />
              <Route path="/recommendation" exact component={Reccomendations} />
              <Route path="/zipcodes" exact component={ZipcodesPage} />
              <Route path="/find" exact component={Find} />
              <Route path="/zipcodes/:zipcode" exact component={IndividualZipcodePage} />
              <Route path="/*" component={PageNotExists} />
              </Switch>
            </div>
            <Footer />
          </div>

        </Router>
      </Container>
    );
  }
}

export default App;
