import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
                <ul>
                    <li>
                        <FormattedDate date={props.data.date} />
                    </li>
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix icon">
                            <img src={props.data.iconUrl} alt={props.data.description}/>
                            <div className="float-left">
                                <WeatherTemperature celsius={props.data.temperature} />
                            </div>
                        </div>
                    </div>
                    <div className="col-2 details">
                        <ul>
                            <li className="humidity">Humidity: {props.data.humidity}%</li>
                            <li className="wind">Wind: {props.data.wind}km/h</li>
                        </ul>
                    </div>
                </div>
        </div>
    );
}