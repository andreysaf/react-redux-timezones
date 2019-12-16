import React, { useState, useEffect } from "react";
import moment from "moment";
import "./CityCard.css";
import { useDispatch } from "react-redux";
import { deleteCity } from "../actions";

const CityCard = (props) => {
  const dispatch = useDispatch();

  const [time, setTime] = useState(
    moment()
      .utcOffset(props.offset / 60)
      .format("h:mm A")
  );

  const [date, setDate] = useState(
    moment()
      .utcOffset(props.offset / 60)
      .format("MMMM Do, YYYY")
  );

  useEffect(() => {
    const intervalTime = setInterval(
      () => setTime(moment().utcOffset(props.offset/60).format('h:mm A')),
      1000
    );

    const intervalDay = setInterval(
      () => setDate(moment().utcOffset(props.offset/60).format('MMMM Do, YYYY')),
      60000,
    );

    return () => {
      clearInterval(intervalTime);
      clearInterval(intervalDay);
    };
  }, []);

  return (
    <div className="card">
      <div className="content">
        <i
          className="right floated im im-x-mark 24"
          onClick={() => dispatch(deleteCity(props.cityId))}
        ></i>
        <div className="time">{time}</div>
        <div className="date">{date}</div>
        <div className="city">{props.name}</div>
      </div>
    </div>
  );
};

export default CityCard;
