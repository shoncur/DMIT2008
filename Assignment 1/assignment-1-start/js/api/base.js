// replace your api key 
const API_KEY = "67de5c5660eaf052bf16da94fa6cd36f"

// create getWeather function here
const getWeather = (cityName) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
        .then((response)=> {
            return response.json()
        }).then((data)=> {
            return data
        })
}

// export the getWeather function
export { getWeather }