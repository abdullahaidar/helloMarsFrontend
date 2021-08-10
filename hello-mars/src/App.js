
import React, { useState, useEffect } from 'react';


// IMPORTS

import TodayWeather from './components/todayWeather';
import FiveDaysWeather from './components/fiveDaysWeather'

const axios = require('axios').default;



const App = () => {

  const [todayWeather, setTodayWeather] = useState({});
  const [fiveDaysWeather, setFiveDaysWeather] = useState([])

  React.useEffect(async () => {

    await axios.get('http://localhost:3000/today').then((resp) => {
      setTodayWeather(resp.data)
    })
    await axios.get('http://localhost:3000/five-days').then((resp) => {
      setFiveDaysWeather(resp.data)
    })
  }, []);

  //console.log(fiveDaysWeather)


  return (
    <div>
      <h1>hello mars</h1>
      <TodayWeather todayWeather={todayWeather} />
      <FiveDaysWeather fiveDaysWeather={fiveDaysWeather} />
    </div>
  );
}

export default App;
