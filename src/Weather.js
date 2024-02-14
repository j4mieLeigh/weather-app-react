import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      date: "Wednesday 07:00",
      temperature: response.data.main.temp,
      wind: response.data.main.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form>
          <input
            type="search"
            placeholder="Enter a city..."
            className="search-bar"
            autoFocus="on"
          />
          <input
            type="submit"
            value="Search"
            className="submit-button btn btn-primary"
          />
        </form>
        <h1>{city}</h1>
        <ul>
          <li>{weather.date}</li>
          <li>{weather.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weather.icon}
                alt={weather.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weather.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
