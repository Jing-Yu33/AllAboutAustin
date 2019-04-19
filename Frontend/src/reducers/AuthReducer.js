const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    userName: null,
    userZipcodes: []
}

const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case "SIGN_IN": 
            return { ...state, isSignedIn: true, userId: action.payload.id, userName: action.payload.name}
        case "SIGN_OUT": 
            return { ...state, isSignedIn: false, userId: null, userName: null, userZipcodes:[]}
        case "GET_USER_ZIPCODES":
            return { ...state, userZipcodes:action.payload.zipcodes }
        default: 
            return state;
    }
}

export default AuthReducer;