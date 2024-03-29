import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response){
        setWeatherData ({
            ready: true,
            temperature: response.data.main.temp,
            city: response.data.name,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            iconUrl: `assets/${response.data.weather[0].icon}.svg`,
            date: new Date(response.data.dt * 1000),
            coordinates: response.data.coord,
        })
    }

    function search(){
        const apiKey = "3ca350b553445b933c97a8b98083fd15";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleCityChange(event){
        setCity(event.target.value);
    }
  
  if (weatherData.ready) {
      return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Search for a city.." className="form-control" autoFocus="on" onChange={handleCityChange}/>
                    </div>
                    <div className="col-3">
                        <input type="submit"value="Search" className="btn btn-primary w-100"/>
                    </div>
                </div>
            
            </form>
            <WeatherInfo data={weatherData}/>
            <Forecast coordinates={weatherData.coordinates}/>
            
        </div>
    );
  } else {
        search();
        return "Loading...";
  }



}