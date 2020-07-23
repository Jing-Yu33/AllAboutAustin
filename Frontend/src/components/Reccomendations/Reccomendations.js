import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import SurveyPopup from '../SurveyPopup/SurveyPopup';
import fetchResult from './fetchResult'
import { Container, Grid } from 'semantic-ui-react';

const Reccomendations = (props) => {

  const query = queryString.parse(props.location.search);    
  const result = fetchResult(query)

  return (
    <Container fluid>
      <h1 className="display-4">Top Reccomendations</h1>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Below are the Top Zip Codes in Austin based on your preference towards the importance of food, education, and traffic.  See below for a detailed explanation of ranking methodology.</li>
        </ul>
        <ul className="list-group lead pb-2 pt-2">
          <div className="row">
            <div className="col-lg-4">Food Weight: {query.food || "50"}</div>
            <div className="col-lg-4">Traffic Weight: {query.traffic || "50"}</div>
            <div className="col-lg-4">Education Weight: {query.education || "50"}</div>
          </div>
        </ul>
          <div className="pt-2">
            <SurveyPopup />
          </div>
        <Grid columns={4}>
          {result}
        </Grid>
        <div className="card-body" >
          <ul className="list-group list-group-flush">
            <li className="list-group-item active">Methodology</li>
            <li className="list-group-item"><b>Food</b>: Food ratings were acquired from the Zomato API of customer ratings of eating establishments.  Ratings are averaged across a zip code</li>
            <li className="list-group-item"><b>Education</b>: Education ratings were acquired from the Austin Govenernment School Database in regards to high school graduation rates.  Since primary and secondary schools feed into the high schools in these areas, this metric is seen to be representative of a zip code's educational performance.  Ratings are averaged across a zip code</li>
            <li className="list-group-item"><b>Traffic</b>: Traffic ratings were acquired from the Austin Government database of transit congestion.  Traffic volume in an area equates to more noise and difficulty with commute, so areas in this category will receive a lower score. </li>
          </ul>
        </div>
    </Container>
  )
}

const mapStateToProps = (state) => {
    return {
        weight: state.weight
    }
}



export default connect(mapStateToProps)(Reccomendations)
