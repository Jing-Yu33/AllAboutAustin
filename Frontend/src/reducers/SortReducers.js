import { connect } from 'react-redux';


const SortReducers = (state=this.props.zipcodes, action) => {
    console.log(state);
    switch(action.type){
        case "SORT_ZIPCODES":
            const category = action.payload.sortByCategory;
            const order = action.payload.sortByOrder;


            if(order === "asc"){

            }


            return { ...action.payload};
            // return { ...state, ..._.mapKeys(action.payload, 'zipcode')};

        default: return state;
    }
}

const mapStateToProps = (state) => {
    return {
        zipcodes: Object.values(state.zipcodes),
    }
}

export default connect(mapStateToProps)(SortReducers);