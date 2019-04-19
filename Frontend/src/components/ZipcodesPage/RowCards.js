import React, { Component } from 'react';
import axios from 'axios';

class RowCards extends Component {

    state = {
      currentSpeed: null
    }

    async componentDidMount(){
      const TOMTOMKEY = "eUdNPoH8tlYdgwAjuCSu3VAtxVAA2OJG"

      const response = await axios.get("https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json",{
        params: {
          key: TOMTOMKEY,
          point: `${this.props.lat},${this.props.lng}`
        }
      })
      this.setState({
        currentSpeed: response.data.flowSegmentData.currentSpeed
      })
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

    render() {
        return(
          <div className="card-deck">
            <div className="card-deck col-lg-4  mt-3 align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Food</h5>
                  <p className="card-text">{this.renderList(this.props.food.resturaunts)}</p>
                  <p className="text-muted font-weight-light">
                    <small>
                      *Explanation
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="card-deck col-lg-4 mt-3 align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Traffic</h5>
                  <p className="card-text">Current Speed(get from tomtom api): {this.state.currentSpeed}</p>
                  <p className="text-muted font-weight-light">
                    <small>
                      *Explanation
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="card-deck col-lg-4 mt-3 align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Education</h5>
                  <p className="card-text">{this.renderList(this.props.education.schools)}</p>
                  <p className="text-muted font-weight-light">
                    <small>
                      *Explanation
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


