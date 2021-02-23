import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Search for a city.." className="form-control" />
                    </div>
                    <div className="col-3">
                        <input type="submit"value="Search" className="btn btn-primary"/>
                    </div>
                </div>
            
            </form>
            <h1>Lisbon</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny" className="src"/>
                    14°C
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 15%</li>
                        <li>humidity: 72%</li>
                        <li>Wind: 13km/h</li>
                    </ul>
                </div>
            </div>
            
    

        </div>
    );

}