import React from 'react';
import SearchBar from './SearchBar';
import CityList from './CityList';

class App extends React.Component{
    state = { cities: [] };

    onSearchSubmit = async (term) => {
        let id = Math.floor((Math.random() * 100) + 1);
        this.setState((state, props) => ({
            cities: [...state.cities, {name: term, id: id}]
        }));

        console.log(this.state.cities);
    }

    render() {
        return (
            <div className="container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <CityList cities={this.state.cities} />
            </div>
        );
    };
}

export default App;