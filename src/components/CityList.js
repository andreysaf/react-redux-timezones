import React from 'react';
import CityCard from './CityCard'

class CityList extends React.Component {
    renderCitiesList () {
        const citiesList = this.props.cities.map((city) => {
            return <CityCard key={city.id} cityId={city.id} name={city.name} onDelete={this.onDelete}/>;
        });
        return citiesList;
    }

    render() {
        return <div className="ui cards">{}</div>;
    }
    
}

export default CityList;