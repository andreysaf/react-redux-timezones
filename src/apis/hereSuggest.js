import axios from 'axios';

export default axios.create({
    baseURL: `http://autocomplete.geocoder.api.here.com/6.2`
});