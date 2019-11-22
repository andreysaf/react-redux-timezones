import axios from 'axios';

export default axios.create({
    baseURL: `https://geocoder.api.here.com/6.2`
});