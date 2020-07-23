import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ChangeCategory from "./ChangeCategory";
import BasicControls from "./BasicControls";
import { Container } from 'semantic-ui-react'
class TopBar extends Component {

    render() {
        return(
          <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{zIndex: 3, backgroundColor: "#cfe0e8"}}>
              <Container fluid>
                <Link className="navbar-brand" to="/"><i className="fas fa-city"></i> <span style={{fontSize:'1.5em'}}>AAA</span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ChangeCategory />
                    <BasicControls />
                </div>
              </Container>
          </nav>            
        )
    }
}
export default TopBar;

