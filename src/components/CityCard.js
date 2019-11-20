import React from 'react';
import { connect } from 'react-redux';
import { deleteCity } from '../actions';

class CityCard extends React.Component {
  onDelete = () => {
    this.props.deleteCity(this.props.name);
  }

  render() {
    return (
        <div className="card">
            <div className="content">
              <i className="right floated close icon" onClick={this.onDelete}></i>
              <div className="header">{this.props.name}</div>
              <div className="meta">Friend</div>
              <div className="description">
                Elliot Fu is a film-maker from New York.
              </div>
            </div>
        </div>
    );
  }
}

export default connect(null, { deleteCity })(CityCard);