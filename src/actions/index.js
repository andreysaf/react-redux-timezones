import {
    FETCH_CITY,
    FETCH_FAIL,
    SUGGEST_CITY,
    DELETE_CITY
} from './types';
import hereAPI from '../apis/hereAPI';
import hereSuggest from '../apis/hereSuggest';
import { APP_ID, APP_CODE } from '../apis/keys';

export const suggestCity = (search) => {
    return async (dispatch) => {
        const response = await hereSuggest.get(`/suggest.json?app_id=${APP_ID}&app_code=${APP_CODE}&query=${search}`);
        dispatch({type: SUGGEST_CITY, payload: response.data });
    }
}

export const deleteCity = (id) => {
    return (dispatch) => { 
        dispatch({type: DELETE_CITY, payload: { id } });
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