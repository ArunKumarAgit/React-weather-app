import React from 'react';
import './current-weather.css';

const CurrentWeather = ({ data }) => {
  let unix = data.sys.sunset;
  let date = new Date(unix * 1000);
  let hrs = date.getHours();
  let mins = date.getMinutes();
  return (
    <div className="weather">
      <div className="top">
        <div className="city-top">
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Current temperature</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <hr></hr>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <hr></hr>
          <div className="parameter-row">
            <span className="parameter-label">Today's high temperature</span>
            <span className="parameter-value">{data.main.temp_max}°C</span>
          </div>
          <hr></hr>
          <div className="parameter-row">
            <span className="parameter-label">Today's low temperature</span>
            <span className="parameter-value">{data.main.temp_min}°C</span>
          </div>

          <hr></hr>
          <div className="parameter-row">
            <span className="parameter-label">Sunset</span>
            <span className="parameter-value">{`${hrs}:${mins}`}:PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
