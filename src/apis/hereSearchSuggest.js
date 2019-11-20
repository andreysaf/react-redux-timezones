import axios from 'axios';
import keys from '../../keys';

export default axios.create({
    baseURL: `https://geocoder.api.here.com/6.2/geocode.xml
    ?app_id={${keys.APP_ID}}
    &app_code={${keys.API_KEY}}`
});