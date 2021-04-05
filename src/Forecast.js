import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";


export default function Forecast (props) {
    let [loaded, setLoaded] = useState (false);
    let [forecast, setForecast] = useState(null);
    function handleResponse(response){
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if(loaded){

     return (
        <div className="Forecast">
            <div className="row">
                <div className="col">
                    <div className="Forecast-day">{forecast[0].dt}</div>
                    <div className="Forecast-temperatures">
                        <span className="Forecast-max">{Math.round(forecast[0].temp.max)}°</span>
                        <span className="Forecast-min">{Math.round(forecast[0].temp.min)}°</span>
                    </div>
                </div>
            </div>
        </div>
    );
       
    } else {
       let apiKey = "3ca350b553445b933c97a8b98083fd15";
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.lat}&lon=${props.data.lon}&exclude=current,minutely,hourly&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleResponse);

        return null;

    }
}
