import { combineReducers } from 'redux';



const sortCategoryReducer = (state=null, action) => {
    switch(action.type){
        case "SORT_CATEGORY":
            return action.payload;
        default:
            return state;
    }
}

const sortOrderReducer = (state="Descending", action) => {
    switch(action.type){
        case "SORT_ORDER":
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    category: sortCategoryReducer,
    order: sortOrderReducer
})