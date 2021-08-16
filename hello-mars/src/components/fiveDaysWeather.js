import React from "react";
import "./fiveDaysWeather.css";

const FiveDaysWeather = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        <h3 className="fiveDaysHeadline">The past five Days</h3>
        <div className="fiveDaysContainer">
          {props.fiveDaysWeather ? (
            props.fiveDaysWeather.map((element, index) => (
              <ul className="listContainer">
                {/* <li key={index}></li> */}
                <li>Date: {element.date}</li>
                <li>Sol: {element.sol}</li>
                <hr />
                <img src="" alt="graphic representation of the weather" />
                <li>Min Temp: {element.minTemp}°C</li>
                <li>Max Temp: {element.maxTemp}°C</li>
              </ul>
            ))
          ) : (
            <p>there is no data</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FiveDaysWeather;
