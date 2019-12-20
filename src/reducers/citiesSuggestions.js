import { SUGGEST_CITY, RESET_SUGGESTIONS } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case SUGGEST_CITY:
            return { ...state, searchHits: action.payload.suggestions };
        case RESET_SUGGESTIONS:
            return { }
        default:
            return state;
    }
};