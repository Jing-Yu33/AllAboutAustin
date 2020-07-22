import React, { Component } from 'react';
import { Marker, Card, InfoWindow, Image, Rating } from 'react-google-maps';

import history from '../../history';

class ZipcodeMarker extends Component {
  state = {
    showingInfoWindow: false,  
    activeMarker: {},         
    selectedPlace: {}
  }
  showingInfoWindow = true;
  // onInfoWindowClick = () => {
  //   history.push(`/zipcodes/${this.props.zipcode.zipcode}`)
  //   // this.setState({showingInfoWindow:true})
  //   // props.showingInfoWindow();
  // };
  onMarkerMouseOver = (props, marker, e) =>{
    console.log(props)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
  });
  }
    
    // const onMarkerHover = () => {
    //   return <Card> Good</Card>
    // }
  icon = {
    path: "M22-13h-44v23h16l6 5 6-5h16z",
    fillColor: "white", 
    fillOpacity: 0.8,
    strokeColor: "white",
    strokeOpacity: 0.8
    }
    // onMarkClick = () => {
    //   this.setState({showingInfoWindow:true})
    // }
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    }
    showInfoCard = () => {
      return (
        <div>
          <Image src='https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg' wrapped ui={false} />
      
        </div>
      )
    }
    render() {
     
      return(
      <div>
          <Marker
              onClick={this.onMarkerMouseOver}
              label={this.props.zipcode}
              icon={this.icon}
              {...this.props}
          />
          {/* <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClick={this.onInfoWindowClick}
          {...this.props}
          // onClose={this.onClose}
        > */}
          {/* <Card>  */}
          {/* <Card></Card> */}
          <div>
            {/* <Card> */}
              {/* {this.showInfoCard()} */}
            {/* <Image src='https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg' wrapped ui={false} /> */}
            {/* </Card> */}
          </div>
           {/* <div>
            {/* {this.showInfoCard()}  */}
          {/* <Image src='https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg' wrapped ui={false} /> */}
            
           {/* </Card> */}
          {/* </div> */} 
        {/* </InfoWindow> */}
      </div>
    )}
};

export default ZipcodeMarker;