import {
    FETCH_FAIL
} from '../actions/types';

export default (state = "", action) => {
    switch (action.type) {
        case FETCH_FAIL:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};