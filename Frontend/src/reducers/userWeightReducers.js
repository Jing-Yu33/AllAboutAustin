const INITIAL_STATE = {
    "food": "50",
    "traffic": "50",
    "education": "50"
}

export const userWeightReducers = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case "FOOD_WEIGHT":
            return { ...state, "food": action.payload};
        
        case "TRAFFIC_WEIGHT":
            return { ...state, "traffic": action.payload};
        
        case "EDUCATION_WEIGHT":
            return { ...state, "education": action.payload};
        
        default:
            return state;
    }
}