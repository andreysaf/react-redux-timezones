import React from 'react';
import { connect } from 'react-redux';
import { deleteCity } from '../actions';

class CityCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(new Date().getTime() + (this.props.offset)).toLocaleString()
    };
  }

  onDelete = () => {
    this.props.deleteCity(this.props.cityId);
  }

  render() {
    return (
        <div className="card">
            <div className="content">
              <i className="right floated close icon" onClick={this.onDelete}></i>
              <div className="header">{this.props.name}</div>
              <div className="time">{this.state.time}</div>
              <div className="meta">{this.props.nameDstLong}</div>
              {/* <div className="description">
                Elliot Fu is a film-maker from New York.
              </div> */}
            </div>
        </div>
    );
  }
}

export default connect(null, { deleteCity })(CityCard);