import {
    FETCH_CITY,
    ADD_CITY,
    DELETE_CITY
} from './types';
import hereAPI from '../apis/hereAPI';
import { APP_ID, APP_CODE } from '../apis/keys';

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
        const response = await hereAPI.get(`/geocode.json?app_id=${APP_ID}&app_code=${APP_CODE}&searchtext=${name}`);
        console.log(response);
        dispatch({type: FETCH_CITY, payload: { name } });
    }
}