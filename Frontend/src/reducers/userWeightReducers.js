const INITIAL_STATE = {
    "Food": "50",
    "Traffic": "50",
    "Education": "50"
}

export const userWeightReducers = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case "FOOD_WEIGHT":
            return { ...state, "Food": action.payload};
        
        case "TRAFFIC_WEIGHT":
            return { ...state, "Traffic": action.payload};
        
        case "EDUCATION_WEIGHT":
            return { ...state, "Education": action.payload};
        
        default:
            return state;
    }
}