import React from 'react';
import CityCard from './CityCard'

const CityList = (props) => {
    console.log(props.cities);
    const citiesList = props.cities.map((city) => {
        return <CityCard key={city.id} name={city.name}/>;
    })
    return <div className="ui cards">{citiesList}</div>;
}

export default CityList;