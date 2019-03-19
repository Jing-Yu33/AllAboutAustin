import { combineReducers } from 'redux';
import { sortCategoryReducer, sortOrderReducer } from './sortReducers';
import { userWeightReducers } from './userWeightReducers';
import DatabaseReducers from './DatabaseReducers';

export default combineReducers({
    category: sortCategoryReducer,
    order: sortOrderReducer,
    weight: userWeightReducers,
    zipcodes: DatabaseReducers
})