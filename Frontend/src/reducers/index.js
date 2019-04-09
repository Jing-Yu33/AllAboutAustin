import { combineReducers } from 'redux';
import { reducer as fromReducer } from 'redux-form';   // built-in reducer
import { userWeightReducers } from './userWeightReducers';
import DatabaseReducers from './DatabaseReducers';

export default combineReducers({
    form: fromReducer,
    weight: userWeightReducers,
    zipcodes: DatabaseReducers,
})