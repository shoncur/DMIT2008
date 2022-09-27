/*
HTML Structure 

<div class="mt-2 card" >
  <div class="card-body">
    <h5 class="card-title">CITY_NAME_HERE, COUNTRY_CODE_HERE</h5>
    <h6 class="card-subtitle mb-2 text-muted">CURRENT_WEATHER_DEGREES_HERE</h6>
    <p class="card-text">WEATHER_DESCRIPTION_HERE</p>
  </div>
</div>

*/

// renderWeather function
const renderWeather = (weatherData, containerElement) => {
  let element = `<div class="mt-2 card" >
    <div class="card-body d-flex flex-row justify-content-between">
      <div>
        <h5 class="card-title">${weatherData.name}, ${weatherData.sys.country}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${weatherData.main.temp}<span>&#176;</span> C</h6>
        <p class="card-text">${weatherData.weather[0].main} - ${weatherData.weather[0].description}</p>
      </div>
      <img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png"/>
    </div>
  </div>`
  containerElement.innerHTML += element
}

// export the renderWeather function
export { renderWeather }