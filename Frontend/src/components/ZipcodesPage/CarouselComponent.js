import React, { Component } from 'react';

class CarouselComponent extends Component {

    render() {
        return(
          <div id="carousel-example-1z" className="carousel slide carousel-fade my-3" data-ride="carousel">
            
            <ol className="carousel-indicators">
              <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-example-1z" data-slide-to="1"></li>
            </ol>
            
            <div className="carousel-inner" role="listbox">
              
              <div className="carousel-item active">
                <img className="d-block w-100" style={{height: '450px', width: '100%', objectFit: 'fill'}} src={this.props.images[0]} alt="First slide"/>
              </div>
              
              <div className="carousel-item">
                <img className="d-block w-100" style={{height: '450px', width: '100%', objectFit: 'fill'}} src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg" alt="Second slide"/>
              </div>
              
            </div>
            
            
            <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
            
          </div>
        )
  }
}

export default CarouselComponent;