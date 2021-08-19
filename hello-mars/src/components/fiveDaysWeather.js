import React from "react";
import "./fiveDaysWeather.css";
import sunny from "../images/sunny.png";

const FiveDaysWeather = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        <h3 className="fiveDaysHeadline">The Past 5 Days</h3>
        <div className="fiveDaysContainer">
          {props.fiveDaysWeather ? (
            props.fiveDaysWeather.map((element, index) => (
              <ul className="listContainer">
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

                <li className="fiveDaysTemp">Low: {element.minTemp}° C</li>
                <li className="fiveDaysTemp">High: {element.maxTemp}° C</li>
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
