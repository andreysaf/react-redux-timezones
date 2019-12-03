import React from 'react';
import SearchBar from './SearchBar';
import CityList from './CityList';
import './App.css'

class App extends React.Component{
    render() {
        return (
            <div className="container" style={{margin: '10px'}}>
                <SearchBar />
                <CityList />
            </div>
        );
    };
}

export default App;