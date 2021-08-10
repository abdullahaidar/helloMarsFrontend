import React from 'react'


const FiveDaysWeather = (props) => {

    console.log(props)
    return (
        <>
            <h3>this is five day weather</h3>

            {props.fiveDaysWeather ? props.fiveDaysWeather.map((element, index) =>
                <ul>
                    {/* <li key={index}></li> */}
                    <li>Date: {element.date}</li>
                    <li>Sol: {element.sol}</li>
                    <li>Season: {element.season}</li>
                    <li>Min Temp: {element.minTemp}</li>
                    <li>Max Temp: {element.maxTemp}</li>
                    <li>Opacity: {element.opacity}</li>
                    <li>Air Pressure: {element.airPressure}</li>
                </ul>
            ) : <p>there is no data</p>
            }
        </>
    )
}

export default FiveDaysWeather