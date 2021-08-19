import React, { useState, useEffect } from "react";
import "./App.css";

// IMPORTS

import TodayWeather from "./components/todayWeather";
import FiveDaysWeather from "./components/fiveDaysWeather";

const axios = require("axios").default;

const App = () => {
  const [todayWeather, setTodayWeather] = useState({});
  const [fiveDaysWeather, setFiveDaysWeather] = useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:3001/today").then((resp) => {
      setTodayWeather(resp.data);
    });
    axios.get("http://localhost:3001/five-days").then((resp) => {
      setFiveDaysWeather(resp.data);
    });
  }, []);

  //console.log(fiveDaysWeather)

  return (
    <div className="appContainer">
      <TodayWeather todayWeather={todayWeather} />
      <FiveDaysWeather fiveDaysWeather={fiveDaysWeather} />
    </div>
  );
};

export default App;
