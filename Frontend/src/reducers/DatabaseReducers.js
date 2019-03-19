const DatabaseReducers = (state={}, action) => {
    switch(action.type){
        case "GET_ALL_ZIPCODES":
            return { ...state, ...action.payload};
            // return { ...state, ..._.mapKeys(action.payload, 'zipcode')};

        case "GET_ONE_ZIPCODE":
            return { ...state, [action.payload.zipcode]: action.payload}
        
        default: return state;
    }
}

export default DatabaseReducers;