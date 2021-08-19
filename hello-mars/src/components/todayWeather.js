import React from "react";
import "./todayWeather.css";
import sunny from "../images/sunny.png";
import logo from "../images/mars_logo.png";

const TodayWeather = (props) => {
  return (
    <div className="containsTodayWeatherAndLog">
      <div className="todayWeatherContainer">
        <h3 className="weatherLocation">Gale Crater, Mars</h3>
        <ul className="todayWeatherListItem">
          <li className="season"> {props.todayWeather.season}</li>
          <br />
          <li className="likeDate">Sol {props.todayWeather.sol}</li>
          <li className="likeDate">{props.todayWeather.date}</li>
          <hr />
          <li className="temp">Low: {props.todayWeather.minTemp} °C</li>
          <br />
          <li className="temp">High: {props.todayWeather.maxTemp} °C</li>
          <br />
          <div className="quatschData">
            <li className="likeDate">
              Opacity <br /> <strong>{props.todayWeather.opacity}</strong>
            </li>

            <img src={sunny} alt="funny sunny" height="75em" width="auto" />
            <li className="likeDate">
              Air Pressure <br />{" "}
              <strong>{props.todayWeather.airPressure} mP</strong>
            </li>
          </div>
        </ul>
      </div>
      <div className="daniversum">
        <img className="logImage" src={logo} alt="Hello Mars Logo" />
      </div>
    </div>
  );
};

export default TodayWeather;
