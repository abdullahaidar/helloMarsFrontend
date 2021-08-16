import React from 'react'
import './fiveDaysWeather.css'



const FiveDaysWeather = (props) => {

    console.log(props)
    return (
<<<<<<< HEAD
        <>
            <h3>this is five day weather</h3>

            {props.fiveDaysWeather ? props.fiveDaysWeather.map((element, index) =>
                <ul>
                    {/* <li key={index}></li> */}
                    <li>Date: {element.date}</li>
                    <li>Sol: {element.sol}</li>
                    <li>Season: {element.season}</li>
                    <li>Min Temp: {element.minTemp} °C</li>
                    <li>Max Temp: {element.maxTemp} °C</li>
                    <li>Opacity: {element.opacity}</li>
                    <li>Air Pressure: {element.airPressure} Pa</li>
                </ul>
            ) : <p>there is no data</p>
            }
        </>
=======
        <div>
            <h3 className="fiveDaysHeadline">The past five Days</h3>
            <div className="fiveDaysContainer">
                {props.fiveDaysWeather ? props.fiveDaysWeather.map((element, index) =>
                    <ul className="listContainer">
                        {/* <li key={index}></li> */}
                        <li>Date: {element.date}</li>
                        <li>Sol: {element.sol}</li>
                        <hr />
                        <img src="" alt="graphic representation of the weather" />
                        <li>Min Temp: {element.minTemp}</li>
                        <li>Max Temp: {element.maxTemp}</li>
                    </ul>
                ) : <p>there is no data</p>
                }
            </div>
        </div>
>>>>>>> ccbb1e8739fef8ada5cbc30293f0ef9c436dad60
    )
}

export default FiveDaysWeather