import React from 'react'

const TodayWeather = (props) => {
    return (
        <div>
            <h3>this is todays weather</h3>
            <ul>
                <li>Date: {props.todayWeather.date}</li>
                <li>Sol: {props.todayWeather.sol}</li>
                <li>Season: {props.todayWeather.season}</li>
                <li>Min Temp: {props.todayWeather.minTemp} °C</li>
                <li>Max Temp: {props.todayWeather.maxTemp} °C</li>
                <li>Opacity: {props.todayWeather.opacity}</li>
                <li>Air Pressure: {props.todayWeather.airPressure} Pa</li>
            </ul>
        </div>
    )
}

export default TodayWeather;
