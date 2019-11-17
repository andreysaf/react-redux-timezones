import React from 'react';
import { connect } from 'react-redux';
import { addCity } from '../actions';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.addCity(this.state.term);
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
            <input type="text" placeholder="Search for a city..." value={this.state.term} onChange={(e) => this.setState({ term: e.target.value})}/>
            </div>
            </form>
            );
    }
}

export default connect(null, { addCity })(SearchBar);