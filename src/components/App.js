import React from 'react';
import SearchBar from './SearchBar';
import CityList from './CityList';

class App extends React.Component{
    state = { cities: [] };

    onDelete = (id) => {
        console.log(id);
        let array = [...this.state.cities];
        let index = array.indexOf(id);
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({cities: array});
        }
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