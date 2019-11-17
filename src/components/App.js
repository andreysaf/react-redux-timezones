import React from 'react';
import SearchBar from './SearchBar';
import CityList from './CityList';

class App extends React.Component{
    state = { cities: [] };

    onDelete = (id) => {
        let prevState = [...this.state.cities];
        let newState = prevState.filter(city => city.id !== id);
        this.setState({cities: newState});
        console.log(this.state);
    }

    onSearchSubmit = async (term) => {
        let id = Math.floor((Math.random() * 100) + 1);
        this.setState((state, props) => ({
            cities: [...state.cities, {name: term, id: id}]
        }));
    }

    render() {
        return (
            <div className="container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <CityList cities={this.state.cities} onDelete={this.onDelete}/>
            </div>
        );
    };
}

export default App;