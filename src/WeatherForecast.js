import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row justify-content-center">
        <div className="col-2">
          <ul>
            <li className="WeatherForecast-day">Thu</li>
            <li>
              <WeatherIcon code="01d" size={36} />
            </li>
            <li className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperatures-max">19°</span>
              <span className="WeatherForecast-temperatures-min">10°</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
