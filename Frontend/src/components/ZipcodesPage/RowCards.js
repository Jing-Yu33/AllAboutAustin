import React, { Component } from 'react';
import axios from 'axios';

export const setCurrentSpeed = (currentSpeed) => ({
  currentSpeed: currentSpeed
})

class RowCards extends Component {

    state = {
      currentSpeed: null
    }

    async componentDidMount(){

      const response = await axios.get("https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json",{
        params: {
          key: process.env.REACT_APP_TOMTOMKEY,
          point: `${this.props.lat},${this.props.lng}`
        }
      })
      this.setState(setCurrentSpeed(response.data.flowSegmentData.currentSpeed))
      // this.setState({
      //   currentSpeed: response.data.flowSegmentData.currentSpeed
      // })
    }

    renderList = (data) => {
      if(data){
        var names = [];
        for(var property in data){
          names.push(property)
        }
  
        return (names.map((name) => {
            return (
              <li key={name}>{name}: {data[name]}</li>
            )
          })
        )  
      }
      return "No data"
    }

    renderCarIcon = () => {
      if(this.state.currentSpeed < 50){
        return <i className="fas fa-car text-danger"></i>
      }
      if(this.state.currentSpeed < 80){
        return <i className="fas fa-car text-warning"></i>
      }
      
      return <i className="fas fa-car text-success"></i>
      
    }
    
    
    render() {
        return(
          <div className="row">
            <div className="col-lg-4 ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Food: <span className="text-info">{this.props.zipcode.foodScore}</span></h5>
                  <p className="card-text">{this.renderList(this.props.food.resturaunts)}</p>
                  <p className="text-muted font-weight-light">
                    <small>
                      *Food ratings were acquired from the Zomato API of customer ratings of eating establishments. Ratings are averaged across a zip code.
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Traffic: <span className="text-info">{this.props.zipcode.trafficScore}</span></h5>
                  <p className="card-text">Current Speed: {this.renderCarIcon()} {this.state.currentSpeed}</p>
                  <p className="text-muted font-weight-light">
                    <small>
                      *1. The current speed are <i>real time observed speeds</i> provided by <a href="https://developer.tomtom.com/traffic-api" target="_blank" rel="noopener noreferrer">tomtom traffic api</a>.&nbsp;
                       2. Traffic ratings were acquired from the Austin Government database of transit congestion. Traffic volume in an area equates to more noise and difficulty with commute, so areas in this category will receive a lower score.
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Education: <span className="text-info">{this.props.zipcode.educationScore}</span></h5>
                  <p className="card-text">{this.renderList(this.props.education.schools)}</p>
                  <p className="text-muted font-weight-light">
                    <small>
                      *Education ratings were acquired from the Austin Govenernment School Database in regards to high school graduation rates. Since primary and secondary schools feed into the high schools in these areas, this metric is seen to be representative of a Zip Code's educational performance. Ratings are averaged across a zip code.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
  }
}

export default RowCards;


