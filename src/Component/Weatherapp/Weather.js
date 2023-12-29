import './Weatherapp.css'
import search_icon from '../image/search.png'
import clear_icon from '../image/clear.png'
import cloud_icon from '../image/cloud.png'
import drizzle_icon from '../image/drizzle.png'
import humidity from '../image/humidity.png'
import rain from '../image/rain.png'
import snow from '../image/snow.png'
import wind from '../image/wind.png'
import { useState } from 'react'

function Weather() {
   let api_key = '21bdcf6d4d3bc4ebe32e2f3c0e47079d';

   const [wicon, setwicon] = useState(cloud_icon)

   const search = async () => {
      const element = document.getElementsByClassName('cityinput')
      if (element[0].value === '') {
         return 0;
      }
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
      let response = await fetch(url)
      let data = await response.json()

      let humiditys = document.getElementsByClassName("humidity");
      let winds = document.getElementsByClassName('wind-speed');
      let temp = document.getElementsByClassName("weather-temp");
      let location = document.getElementsByClassName('weather-location');

      humiditys[0].innerHTML = data.main.humidity + "%";
      winds[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
      temp[0].innerHTML = Math.floor(data.main.temp) + "°C";
      location[0].innerHTML = data.name;

      if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
         setwicon(clear_icon)
      }
      else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n') {
         setwicon(cloud_icon)
      }
      else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n') {
         setwicon(drizzle_icon)
      }
      else if (data.weather[0].icon === '04d' || data.weather[0].icon === '04n') {
         setwicon(drizzle_icon)
      }
      else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09n') {
         setwicon(rain)
      }
      else if (data.weather[0].icon === '10d' || data.weather[0].icon === '10n') {
         setwicon(rain)
      }
      else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n') {
         setwicon(snow)
      }
      else {
         setwicon(clear_icon)
      }
   }
   return (
      <div className="container">
         <div className="top-bar">
            <input type="text" className='cityinput' />
            <div className="search-icon" onClick={() => { search() }}>
               <img src={search_icon} alt="" />
            </div>
         </div>
         <div className="weather-img">
            <img src={wicon} alt="" />
         </div>
         <div className="weather-temp">24°C</div>
         <div className="weather-location">London</div>
         <div className="data-container">
            <div className="element">
               <img src={humidity} className='icon' alt="" />
               <div className="data">
                  <div className="humidity">64%</div>
                  <div className="text"> humidity
                  </div>
               </div>
            </div>
            <div className="element">
               <img src={wind} className='icon' alt="" />
               <div className="data">
                  <div className="wind-speed">18 km/h</div>
                  <div className="text"> Wind Speed</div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Weather