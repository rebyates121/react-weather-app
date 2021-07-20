import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by Rebecca Yates and is{" "}
          <a
            href="https://github.com/rebyates121/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
          , and is currently a work in progress.
        </footer>
      </div>
    </div>
  );
}
