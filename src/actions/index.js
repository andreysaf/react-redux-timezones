import {
    FETCH_CITY,
    ADD_CITY,
    DELETE_CITY
} from './types';

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
    return (dispatch) => { 
         dispatch({type: FETCH_CITY, payload: { name } });
    }
}