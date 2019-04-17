const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    userName: null,
    userZipcodes: []
}

const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case "SIGN_IN": 
            return { ...state, isSignedIn: true, userId: action.payload.id, userName: action.payload.name, userZipcodes:action.payload.zipcodes}
        case "SIGN_OUT": 
            return { ...state, isSignedIn: false, userId: null, userName: null, userZipcodes:[]}

        default: 
            return state;
    }
}

export default AuthReducer;