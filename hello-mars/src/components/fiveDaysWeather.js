import React from "react";
import "./fiveDaysWeather.css";
import sunny from "../images/sunny.png";

const FiveDaysWeather = (props) => {
  // console.log(props);

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
    <div>
      <div>
        <h3 className={isDayorNight() === "day" ? "fiveDaysHeadline  fiveDaysHeadlineLightMode " : "fiveDaysHeadline fiveDaysHeadlineDarkMode"}>The Past 5 Days</h3>
        <div className=  "fiveDaysContainer">
          {props.fiveDaysWeather ? (
            props.fiveDaysWeather.map((element, index) => (
              <ul className={isDayorNight() === "day" ? "listContainer" : "listContainer listContainerDarkMode"}>
                {/* <li key={index}></li> */}
                <li className="fiveDaysDate">Sol {element.sol}</li>
                <li className="fiveDaysDate"> {element.date}</li>
                <br />
                <hr />
                <img
                  src={sunny}
                  alt="sunny graphic"
                  height="75em"
                  width="auto"
                />
                <li className={isDayorNight() === "day" ? "fiveDaysTemp fiveDaysTempLightMode " : "fiveDaysTemp fiveDaysTempDarkMode"}>High: {element.maxTemp}° C</li>
                <li className={isDayorNight() === "day" ? "fiveDaysTemp fiveDaysTempLightMode " : "fiveDaysTemp fiveDaysTempDarkMode"}>Low: {element.minTemp}° C</li>
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
