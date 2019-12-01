import React from 'react';
import { connect } from 'react-redux';
import CityCard from './CityCard';

class CityList extends React.Component {
    renderCitiesList() {
        const citiesList = this.props.cities.map((city) => {
            return <CityCard key={city.LocationId} 
            cityId={city.LocationId} 
            offset={city.AdminInfo.TimeZone.offset}
            nameDstLong={city.AdminInfo.TimeZone.nameDstLong}
            name={city.Address.Label}/>;
        });
        return citiesList;
    }

    render() {
        return <div className="ui cards">{this.renderCitiesList()}</div>;
    }
    
}

const mapStateToProps = (state) => {
    return { cities: Object.values(state.cities)
    };
}

export default connect(mapStateToProps, { })(CityList);