import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

class BasicControls extends Component {

    render() {
            const recomUrl = `/recommendation?food=${this.props.weight.Food}&traffic=${this.props.weight.Traffic}&education=${this.props.weight.Education}`;
            return(
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={recomUrl}>Recommendation</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <GoogleAuth />
                    </li>
                </ul>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        weight: state.weight
    }
}
export default connect(mapStateToProps)(BasicControls);

