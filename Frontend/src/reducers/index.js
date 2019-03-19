import { combineReducers } from 'redux';
import { userWeightReducers } from './userWeightReducers';
import DatabaseReducers from './DatabaseReducers';

export default combineReducers({
    weight: userWeightReducers,
    zipcodes: DatabaseReducers
})