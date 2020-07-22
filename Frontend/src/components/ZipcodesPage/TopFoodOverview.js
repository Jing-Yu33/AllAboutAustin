
import React, { Component } from 'react';
import { connect } from 'react-redux';

import RankingList from '../rankingList/RankingList';
import { GetTop10ZipcodeByCategory } from '../../actions';
import { Link } from 'react-router-dom'
class TopFoodOverview extends Component {

    componentDidMount() {
        this.props.GetTop10ZipcodeByCategory("food", "food");
    }

    onSortDownSubmit = (value) => {
        this.props.GetTop10ZipcodeByCategory("food", value.sortByCategory, value.sortByOrder);
    }

    render(){
        return(
           <div style={{marginTop: '30px'}}>
             <div>
             <div>
              <h4>Browse Zipcode by Food <span style={{float:'right',fontSize:'0.8em'}}><Link to='/education'> See more</Link> </span></h4>
             </div>
             </div>
            <RankingList data={this.props.zipcodes.slice(0,3)} category={this.props.category} order={this.props.order}/>
           </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        zipcodes: Object.values(state.zipcodes)
    }
}

export default connect(mapStateToProps, {
    GetTop10ZipcodeByCategory
})(TopFoodOverview);
