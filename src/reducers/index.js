import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer.js';
import errorReducer from './errorReducer.js';

export default combineReducers({
    cities: citiesReducer,
    errors: errorReducer
});