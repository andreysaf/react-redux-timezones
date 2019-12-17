import _ from 'lodash';
import {
    FETCH_CITY,
    DELETE_CITY
} from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_CITY:
            return { ...state, [action.payload.LocationId]: action.payload };
        case DELETE_CITY: 
            return _.omit(state, action.payload.id);
        default:
            return state;
    }
};