import * as ActionTypes from '../constants/ActionTypes';

const DatabaseReducers = (state={}, action) => {
    switch(action.type){
        case ActionTypes.GET_ALL_ZIPCODES:
            return { ...action.payload};
            // return { ...state, ..._.mapKeys(action.payload, 'zipcode')};

        case ActionTypes.GET_ONE_ZIPCODE:
            return {[action.payload.zipcode]: action.payload}
        
        case ActionTypes.GET_TOP_ZIPCODES_BY_CATEGORY:
            return {...action.payload}
        
        case ActionTypes.GET_FILTERED_ZIPCODES:
            return {...action.payload}
        // return { ...state, ..._.mapKeys(action.payload, 'zipcode')};
        case ActionTypes.GET_USER_ZIPCODES_OBJECTS:
            return {...action.payload}
        default: return state;
    }
}

export default DatabaseReducers;