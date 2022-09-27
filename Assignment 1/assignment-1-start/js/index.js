// Include your assignment 1 below.
// Read the PDF for instruction on what to do.
// Ensure that you look at the "Marking Key" section of the PDF
// to not lose any marks.

import 'bootstrap/dist/css/bootstrap.min.css';

import { getWeather } from './api/base';
import { renderWeather } from './dom/weather';

document.getElementById("weather-search").addEventListener("submit", (event) => {
    event.preventDefault();
    let cityName = document.querySelector("input").value;

    getWeather(cityName).then((weatherData) => {
        let weatherElement = document.querySelector(".weather-container");
        renderWeather(weatherData, weatherElement);
    })
})