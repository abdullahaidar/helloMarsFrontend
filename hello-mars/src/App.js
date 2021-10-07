import React, { useState, useEffect } from "react";
import "./App.css";

// IMPORTS

import TodayWeather from "./components/todayWeather";
import FiveDaysWeather from "./components/fiveDaysWeather";

const axios = require("axios").default;

const App = () => {

  const isDayorNight = () => {
    const currentDate = new Date();
    if ((currentDate.getHours() > 6) && (currentDate.getHours() < 19)) {
      return "day";
    }
    else {
      return "night";
    }
  }

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
    <main className={isDayorNight() === "day" ? "appContainerLight" : "appContainerDark"}>
      <TodayWeather todayWeather={todayWeather} />
      <FiveDaysWeather fiveDaysWeather={fiveDaysWeather} />
    </main>
  );
};

export default App;
