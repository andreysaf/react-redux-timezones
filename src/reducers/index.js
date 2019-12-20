import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer.js';
import citiesSuggestions from './citiesSuggestions.js';
import errorReducer from './errorReducer.js';

export default combineReducers({
    cities: citiesReducer,
    suggestions: citiesSuggestions,
    errors: errorReducer
});