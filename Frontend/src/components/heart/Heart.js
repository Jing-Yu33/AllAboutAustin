import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AddZipcodesToUser, RemoveZipcodesFromUser } from '../../actions/index';

class Heart extends Component {
      
    state = {
      clicked: [],
      unclicked: [],
    }

    onHeartAddClick = (e, zipcode) => {
        e.stopPropagation();
        this.props.AddZipcodesToUser(this.props.userId, zipcode);
        this.setState(prevState =>({
          clicked: [...prevState.clicked, zipcode],
          unclicked: this.state.unclicked.filter((_, i) => this.state.unclicked[i]!==zipcode)
        }))
      }
    
      onHeartRemoveClick = (e, zipcode) => {
        e.stopPropagation();
        this.props.RemoveZipcodesFromUser(this.props.userId, zipcode);
        this.setState(prevState =>({
          unclicked: [...prevState.unclicked, zipcode],
          clicked: this.state.clicked.filter((_, i) => this.state.clicked[i]!==zipcode)
        }))
      }

    render () {
      const { zipcode } = this.props;
      if(this.props.isSignedIn){
        if(this.state.unclicked.includes(zipcode)){
          return <div onClick={(e) => this.onHeartAddClick(e, zipcode)}><i className="far fa-heart"></i></div>
        }
  
        if(this.props.userZipcodes.includes(zipcode) || this.state.clicked.includes(zipcode)){
          return <div onClick={(e) => this.onHeartRemoveClick(e, zipcode)}><i className="fas fa-heart"></i></div>
        } else {
          return <div onClick={(e) => this.onHeartAddClick(e, zipcode)}><i className="far fa-heart"></i></div>
        }
      }
      return <div></div>
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId,
        userZipcodes: state.auth.userZipcodes
    }
}

export default connect(mapStateToProps, {
    AddZipcodesToUser, RemoveZipcodesFromUser
})(Heart)
