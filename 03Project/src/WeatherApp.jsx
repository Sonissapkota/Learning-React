import {useState, useEffect} from 'react'
import './App.css'

function WeatherApp(){
    const [city, setCity] = useState("Kathmandu")
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState(null)

    const api_key = ""

    useEffect(()=>{
        async function fetchWeather(){
            try{
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
                const data = await response.json()
                if(data.cod !== 200){
                    setError(data.message)
                    setWeather(null)
                }else{
                    setWeather(data)
                    setError(null)
                    console.log(data);
                }
            }catch(error){
                setError(error.message);
                setWeather(null)
            }
        }
        fetchWeather()
    }, [city, api_key])
    return(
        <div class="weather-card">
        <img src="https://img.icons8.com/clouds/100/000000/partly-cloudy-day.png" alt="Weather Icon" class="weather-icon"/>
        <div class="temperature">
        {weather ? `${Math.round(weather.main.temp-273.15)}°C`: `--°C`}
        </div>
        <div class="location">{city}, NP</div>
        <div class="condition">{weather ? weather.weather[0].description : `Loading....`}</div>
        <div>
            <div class="info-item"><strong>Humidity:</strong> {weather ? `${weather.main.humidity}%` : `--%`}</div>
            <div class="info-item"><strong>Wind:</strong> {weather ? `${weather.wind.speed} km/h` : `--km/h`}</div>
        </div>
    </div>
    )
}

export default WeatherApp