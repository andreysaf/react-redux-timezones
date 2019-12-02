import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteCity } from '../actions';

class CityCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().utcOffset(this.props.offset/60).format('MMMM Do, YYYY h:mm A')
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: moment().utcOffset(this.props.offset/60).format('MMMM Do, YYYY h:mm A')
    });
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