import React from "react";

export default function ForecastDay (props){
    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

     function minTemperature(){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }


    return (
        <div>
            <div className="Forecast-day"><strong>{day()}</strong></div>
            <img
                src={`assets/${props.data.weather[0].icon}.svg`}
                alt="weather icon"
                className="forecast-images"
              />
            <div className="Forecast-temperatures">
                <span className="Forecast-temperature-max">{maxTemperature()} </span>
                <span className="Forecast-temperature-min">{minTemperature()}</span>
            </div>
        </div>
    )
}
