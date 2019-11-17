import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer.js';

export default combineReducers({
    cities: citiesReducer
});