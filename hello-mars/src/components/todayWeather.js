import React from "react";
import "./todayWeather.css";

const TodayWeather = (props) => {
  return (
    <div className="containsTodayWeatherAndLog">
      <div className="todayWeatherContainer">
        <h3>Gale Crater, Mars</h3>
        <ul className="todayWeatherListItem">
          <li>Season: {props.todayWeather.season}</li>
          <li>Sol: {props.todayWeather.sol}</li>
          <li>Date: {props.todayWeather.date}</li>
          <hr />
          <li>Min Temp: {props.todayWeather.minTemp} °C</li>
          <li>Max Temp: {props.todayWeather.maxTemp} °C</li>
          <li>Opacity: {props.todayWeather.opacity}</li>
          <img src="" alt="graphic representation of the weather" />
          <li>Air Pressure: {props.todayWeather.airPressure}</li>
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
