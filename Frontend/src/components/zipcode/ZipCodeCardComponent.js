import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Rating } from 'semantic-ui-react';
import history from '../../history';
import { AddZipcodesToUser, RemoveZipcodesFromUser, GetUserZipcodes } from '../../actions';
import { DataBase } from '../../apis/DataBase'

class ZipCodeCardComponent extends Component {
  
  state = {
    clicked: [],
    unclicked: [],
    cardStyle: null,
    reviewsNumber: 0,
    hearted: this.props.userZipcodes!==null? this.props.userZipcodes.includes(this.props.zipcode.zipcode) : null
  }
  async componentDidMount() {
    const response = await DataBase.get(`/comments/${this.props.zipcode.zipcode}`) 
    if(response.data !== null) this.setState({reviewsNumber: response.data.length})

  }
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.isSignedIn !== this.props.isSignedIn || JSON.stringify(nextProps.userZipcodes) !== JSON.stringify(this.props.userZipcodes) || nextProps.zipcodes !== this.props.zipcodes || nextState.cardStyle !== this.state.cardStyle
    || nextState.hearted !== this.state.hearted)
  }
  componentDidUpdate() {
    if (this.props.isSignedIn) {
      this.props.GetUserZipcodes(this.props.userId);
      // this.setState({hearted: this.props.userZipcodes.includes(this.props.zipcode.zipcode)? true: false})
    }
  }
  renderExistIcon = (num) => {
    if(num === 0){
      return <i className="fas fa-times text-danger"></i>
    }else{
      return <i className="fas fa-check text-success"></i>
    }
  }

  onMouseEnter = () => {
    this.setState({
      cardStyle: {
        boxShadow: "0 20px 10px rgba(8, 112, 184, 0.7)"
      }
    })
  }

  onMouseLeave = () => {
    this.setState({
      cardStyle: {
        boxShadow: null
      }
    })
  }

  onCardClick = () => {
    history.push(`/zipcodes/${this.props.zipcode.zipcode}`)
  }
  onHeartClick = async (e) => {
    e.stopPropagation();
    if (this.state.hearted === false) {
      this.props.AddZipcodesToUser(this.props.userId,this.props.zipcode.zipcode)
    }
    else {
      this.props.RemoveZipcodesFromUser(this.props.userId,this.props.zipcode.zipcode)
    }
    await this.setState({hearted:!this.state.hearted})
    this.props.handleUnlike(this.props.zipcode.zipcode);
  }
  render() {
    return(
      <div  className="CardLink" onClick={this.onCardClick}>
        <div className="my-3 card text-center bg-light ZipCodeCardComponent " 
            style={this.state.cardStyle} 
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}>
          <div className="card-header text-left">
            <h4>
              <span className="text-secondary">
                {this.props.zipcode.region}: 
              </span>
              <span className="text-primary">
                  {this.props.zipcode.zipcode}
              </span>
              {this.props.isSignedIn? 
              <span className="btn text-danger" onClick={this.onHeartClick}>
                <i  className={this.state.hearted ? "fas fa-heart" : "far fa-heart"}></i>
              </span> : null}
            </h4>
          </div>
        <div className="card-body" >
          <div className="row align-items-center">
            <div>
              {/* <img className="card-img-top img-thumbnail" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="zipcode"/> */}
              <img className="card-img-top img-thumbnail"
                    style={{height: '200px', width: '100%', objectFit: 'fill'}}
                    src={this.props.zipcode.images[0]} 
                    alt="zipcode"/>
            </div>
            <div>
              <div className="align-content-center">
               <p> {this.props.zipcode.description.substring(0, Math.min(this.props.zipcode.description.length, 100))}... </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-light">
                  <div className="row">
                    <div className="col-6" align="center">
                      <Rating icon='star' defaultRating={this.props.zipcode.averageScore / 10 * 5} maxRating={5} disabled /> 
                    </div>
                    <div className="col-6" align="center">
                      <p> {this.state.reviewsNumber} Reviews </p>
                    </div>
                  </div>
                  </li>
                <li className="list-group-item bg-light">
                  <div className="row">
                    <div className="col-6" align="center">
                      Holistic Score: <span className="text-info">{this.props.zipcode.averageScore}</span>
                    </div>
                    <div className="col-6" align="center">
                      Food Score: <span className="text-info">{this.props.zipcode.foodScore}</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item bg-light">
                  <div className="row">
                    <div className="col-6" align="center">
                      Traffic Score: <span className="text-info">{this.props.zipcode.trafficScore}</span>
                    </div>
                    <div className="col-6" align="center">
                      Education Score: <span className="text-info">{this.props.zipcode.educationScore}</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item bg-light">
                  <div className="row">
                    <div className="col-6" align="center">
                      Hospitals: {this.renderExistIcon(this.props.zipcode.numOfHospitals)}
                    </div>
                    <div className="col-6" align="center">
                      Cinemas: {this.renderExistIcon(this.props.zipcode.numOfCinemas)}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      zipcodes: state.zipcodes,
      isSignedIn: state.auth.isSignedIn,
      userId: state.auth.userId,
      userZipcodes: state.auth.userZipcodes
  }
}

export default connect(mapStateToProps, {
  GetUserZipcodes, AddZipcodesToUser, RemoveZipcodesFromUser
})(ZipCodeCardComponent);