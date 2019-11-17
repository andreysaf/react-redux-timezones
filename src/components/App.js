import React from 'react';
import SearchBar from './SearchBar';
import CityList from './CityList';

class App extends React.Component{
    render() {
        return (
            <div className="container" style={{marginTop: '10px'}}>
                <SearchBar />
                <CityList />
            </div>
        );
    };
}

export default App;