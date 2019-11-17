import React from 'react';
import CityCard from './CityCard'

class CityList extends React.Component {
    onDelete = (cityId) => {
        this.props.onDelete(cityId);
    }

    renderCitiesList () {
        const citiesList = this.props.cities.map((city) => {
            return <CityCard key={city.id} cityId={city.id} name={city.name} onDelete={this.onDelete}/>;
        });
        return citiesList;
    }

    render() {
        return <div className="ui cards">{this.renderCitiesList()}</div>;
    }
    
}

export default CityList;