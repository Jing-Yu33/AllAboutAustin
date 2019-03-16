export const sortCategoryReducer = (state=null, action) => {
    switch(action.type){
        case "SORT_CATEGORY":
            return action.payload;
        default:
            return state;
    }
}

export const sortOrderReducer = (state="Descending", action) => {
    switch(action.type){
        case "SORT_ORDER":
            return action.payload;
        default:
            return state;
    }
}