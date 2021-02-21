import React from "react";
import axios from "axios";

export default function Weather(){

    function handleResponse(response){
        alert(`the weather in New york is ${response.data.main.temp}C`);
    }

    let apiKey = "3ca350b553445b933c97a8b98083fd15";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return (
        <h2>
            hello from weather
        </h2>
    )

}