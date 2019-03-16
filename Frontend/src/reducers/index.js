import { combineReducers } from 'redux';
import { sortCategoryReducer, sortOrderReducer } from './sortReducers';
import { userWeightReducers } from './userWeightReducers';

export default combineReducers({
    category: sortCategoryReducer,
    order: sortOrderReducer,
    weight: userWeightReducers
})