const DatabaseReducers = (state={}, action) => {
    switch(action.type){
        case "GET_ALL_ZIPCODES":
            return { ...action.payload};
            // return { ...state, ..._.mapKeys(action.payload, 'zipcode')};

        case "GET_ONE_ZIPCODE":
            return {[action.payload.zipcode]: action.payload}
        
        case "GET_TOP_ZIPCODES_BY_CATEGORY":
            return {...action.payload}
        
        case "GET_FILTERED_ZIPCODES":
            return {...action.payload}
        // return { ...state, ..._.mapKeys(action.payload, 'zipcode')};

        default: return state;
    }
}

export default DatabaseReducers;