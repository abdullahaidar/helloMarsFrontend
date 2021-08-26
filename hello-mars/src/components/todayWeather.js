import React from "react";
import "./todayWeather.css";
import sunny from "../images/sunny.png";
import logo from "../images/mars_logo.png";

const TodayWeather = (props) => {

  const isDayorNight = () => {
    const currentDate = new Date();
    if ((currentDate.getHours() > 6) && (currentDate.getHours() < 19)) {
      return "day";
    }
    else {
      return "night";
    }
  }

  return (
    <div className="containsTodayWeatherAndLog">
      <div className=
        {isDayorNight() === "day" ? "todayWeatherContainer todayWeatherContainerLightMode" : "todayWeatherContainer todayWeatherContainerDarkMode"}
      >
        <h3 className={isDayorNight() === 'day' ? "weatherLocation weatherLocationLightMode" : "weatherLocation weatherLocationDarkMode"}>Gale Crater, Mars</h3>
        <ul className="todayWeatherListItem">
          <li className="season"> {props.todayWeather.season}</li>
          <br />
          <li className="likeDate">Sol {props.todayWeather.sol}</li>
          <li className="likeDate">{props.todayWeather.date}</li>
          <hr />

          <li className={isDayorNight() === 'day' ? "temp tempLightMode" : "temp tempDarkMode"}>High: {props.todayWeather.maxTemp} °C</li>
          <br />
          <li className={isDayorNight() === 'day' ? "temp tempLightMode" : "temp tempDarkMode"}>Low: {props.todayWeather.minTemp} °C</li>
          <br />
          <div className="opacityPressureDiv">
            <li className="opacityPressure">
              {" "}
              <br />
              Opacity <br />{props.todayWeather.opacity}
            </li>

            <img src={sunny} alt="funny sunny" height="130em" width="auto" />

            <li className="opacityPressure ">
              {" "}
              <br />
              Air Pressure <br />{" "}
              {props.todayWeather.airPressure} mP
            </li>
          </div>
        </ul>
      </div>
      <div className={isDayorNight()==='day' ? "logoLight" : "logoDark"} >
        {/* <img className="logo"
          src={logo}
          alt="Hello Mars Logo"
          height="500vh"
          width="auto"
        /> */}
      </div>
    </div>
  );
};

export default TodayWeather;


