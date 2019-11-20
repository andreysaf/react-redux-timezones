import {
    FETCH_CITY,
    ADD_CITY,
    DELETE_CITY
} from './types';
import hereAPI from '../apis/hereSearchSuggest';

export const addCity = (name) => {
    return (dispatch) => {
        dispatch({type: ADD_CITY, payload: { name } });
    }
}

export const deleteCity = (name) => {
    return (dispatch) => { 
        dispatch({type: DELETE_CITY, payload: { name } });
    }
}

export const fetchCity = (name) => {
    return async (dispatch) => {
        const response = await hereAPI.get('/posts');
        console.log(response);
        dispatch({type: FETCH_CITY, payload: { name } });
    }
}