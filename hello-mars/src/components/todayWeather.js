import React from "react";
import "./todayWeather.css";
import sunny from "../images/sunny.png";

const TodayWeather = (props) => {
  return (
    <div className="containsTodayWeatherAndLog">
      <div className="todayWeatherContainer">
        <h3 className="weatherLocation">Gale Crater, Mars</h3>
        <ul className="todayWeatherListItem">
          <li className="season">Season: {props.todayWeather.season}</li>
          <li className="date">Sol: {props.todayWeather.sol}</li>
          <li className="date">Date: {props.todayWeather.date}</li>
          <hr />
          <li className="temp">Min Temp: {props.todayWeather.minTemp} °C</li>
          <li className="temp">Max Temp: {props.todayWeather.maxTemp} °C</li>
          <li className="weatherData">Opacity: {props.todayWeather.opacity}</li>
          <img src={sunny} alt="funny sunny" height="75em" width="auto" />
          <li className="weatherData">
            Air Pressure: {props.todayWeather.airPressure} mP
          </li>
        </ul>
      </div>
      <div>
        <h2 className="logoContainer">HELLO MARS</h2>
        <img className="logImage" src="" alt="planet Mars" />
      </div>
    </div>
  );
};

export default TodayWeather;
