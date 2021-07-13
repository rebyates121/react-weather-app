import React from 'react';
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by Rebecca Yates and is {" "}
        
        <a href="https://github.com/rebyates121/react-weather-app" target="_blank">
          open-sourced on Github
        </a>
        </footer>
      </div>
    </div>
  );
}
