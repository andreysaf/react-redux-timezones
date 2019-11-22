import _ from 'lodash';
import {
    FETCH_CITY,
    ADD_CITY, 
    DELETE_CITY
} from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_CITY:
            return { ...state, [action.payload.name]: action.payload };
        case ADD_CITY:
            return { ...state, [action.payload.name]: action.payload };
        case DELETE_CITY: 
            return _.omit(state, action.payload);
        default:
            return state;
    }
};