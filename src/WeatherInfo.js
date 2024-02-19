import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex mb-3">
            <div>
              <WeatherIcon
                code={props.data.icon}
                size={75}
              />
            </div>
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <strong>{props.data.humidity}</strong>%
            </li>
            <li>
              Wind: <strong>{props.data.wind}</strong> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
