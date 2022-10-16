import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { Weather } from '../types'
import '../styles/WeatherCard.css'

interface Props {
  setTemp: React.Dispatch<React.SetStateAction<number|undefined>>,
  setIsCelsius: React.Dispatch<React.SetStateAction<Boolean>>,
  temp: number|undefined
  isCelsius: Boolean 
}

const WeatherCard = ({setTemp, setIsCelsius, temp, isCelsius}: Props) => {

  const weather: Weather = useSelector((state: RootState) => state.weather)

  // Setting up state temp as celsius
  useEffect(() => {
    setTemp(Math.floor(weather?.main.temp -273.15)) 
    setIsCelsius(true)
  }, [])
  

  // Change either celsius to farenheit or viceversa
  const handleChangeTemp = () => {
    if (isCelsius) {
      setTemp(temp => Math.floor(temp! * 1.8 + 32))
      setIsCelsius(false)
    } else {
      setTemp(temp => Math.floor((temp! - 32) * 0.5556))
      setIsCelsius(true)
    }
  }

  console.log(weather)

  return (
    <section className='main__section'>
      <h2 className='section-title'>Current Weather</h2>
      <article className='weather-card'>
        <h3 className='weather-name'>{weather?.name} {weather?.sys?.country}</h3>
        <div className='weather-card__main'>
          <div className='img-cont main-cont'>
            <div className='img'><img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" /></div>
            <span>{temp}{isCelsius ? '°C' : '°F'}</span>
          </div>
          <div className='info-cont main-cont'>
            <h3>"{weather?.weather[0].description}"</h3>
            <div className='weather-info__cont'>
              <span><i className='bx bx-wind'></i> Wind Speed {weather?.wind.speed}m/s</span>
              <span><i className='bx bx-cloud'></i> Clouds {weather?.clouds.all}%</span>
              <span><i className='bx bxs-thermometer'></i> Pressure {weather?.main.pressure}hPa</span>
            </div>
          </div>
        </div>
        <footer className='weather-card__footer'>
          <button onClick={handleChangeTemp}>Change to {isCelsius ? '°F' : '°C'}</button>
        </footer>
      </article>
    </section>
  )
}

export default WeatherCard