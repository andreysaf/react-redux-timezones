import React from 'react';
import moment from 'moment';
import './CityCard.css';
import { connect } from 'react-redux';
import { deleteCity } from '../actions';

class CityCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().utcOffset(this.props.offset/60).format('h:mm A'),
      date: moment().utcOffset(this.props.offset/60).format('MMMM Do, YYYY'),
    };
  }

  componentDidMount() {
    this.intervalTime = setInterval(
      () => this.updateTime(),
      1000
    );
    this.intervalDay = setInterval(
      () => this.updateDate(),
      60000,
    )
  }

  componentWillUnmount() {
    clearInterval(this.intervalTime);
    clearInterval(this.intervalDay);
  }

  updateTime() {
    this.setState({
      time: moment().utcOffset(this.props.offset/60).format('h:mm A')
    });
  }

  updateDate() {
    this.setState({
      date: moment().utcOffset(this.props.offset/60).format('MMMM Do, YYYY')
    });
  }

  onDelete = () => {
    this.props.deleteCity(this.props.cityId);
  }

  render() {
    return (
        <div className="card">
            <div className="content">
              <i className="right floated im im-x-mark 24" onClick={this.onDelete}></i>
              <div className="time">{this.state.time}</div>
              <div className="date">{this.state.date}</div> 
              <div className="city">{this.props.name}</div>
            </div>
        </div>
    );
  }
}

export default connect(null, { deleteCity })(CityCard);