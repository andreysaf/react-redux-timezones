import {
    FETCH_CITY,
    FETCH_FAIL,
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
        const response = await hereAPI.get(`/geocode.json?app_id=${APP_ID}&app_code=${APP_CODE}&searchtext=${name}&gen=9&locationattributes=tz`);
        const resultArray = response.data.Response.View;
        if (resultArray.length > 0) {
            const obj = resultArray[0].Result[0].Location;
            dispatch({type: FETCH_CITY, payload: obj });
        } else {
            dispatch({type: FETCH_FAIL, payload: `No results found for ${name}` });
        }
    }
}