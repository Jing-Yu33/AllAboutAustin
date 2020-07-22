import React, { Component } from 'react'
import TopTrafficOverview from './TopTrafficOverview';
import TopFoodOverview from './TopFoodOverview';
import TopEducationOverview from './TopEducationOverview';
class Overview extends Component{

  render() {
    return(
      <div>
        <TopFoodOverview/>     
        <TopTrafficOverview/>        
        <TopEducationOverview/>       
      </div>
    )
  }
}
export default Overview