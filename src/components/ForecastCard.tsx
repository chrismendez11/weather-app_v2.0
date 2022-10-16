import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { api, days, months } from '../api'
import { RootState } from '../store'
import '../styles/ForecastCard.css'
import { Forecast, ForecastList, LatLon, Weather } from '../types'

interface Props {
  setTemp: React.Dispatch<React.SetStateAction<number|undefined>>,
  setIsCelsius: React.Dispatch<React.SetStateAction<Boolean>>,
  temp: number|undefined
  isCelsius: Boolean 
}

const ForecastCard = ({setTemp, setIsCelsius, temp, isCelsius}: Props) => {

  const [date, setDate] = useState<string>()
  const [forecast, setForecast] = useState<ForecastList[]>()

  const weather: Weather = useSelector((state: RootState) => state.weather)

  useEffect(() => {
      const info: LatLon = {
        lat: weather.coord.lat, 
        lon: weather.coord.lon
      }
      api.forecast(info)
      .then(res => {
        console.log(res)
        const array: ForecastList[] = []
        for (let i = 4; i < res.list.length; i += 8) {
          array.push(res.list[i]) 
        }
        setForecast(array)
      })
      .catch(err => console.log(err))
  }, [weather])

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
  
  console.log(forecast)
  
  return (
    <section className='main__section'>
      <h2 className='section-title'>Forecast</h2>
      <div className='forecast-card__container'>
        {forecast?.map((predict: ForecastList) => {
          const date = new Date(predict.dt_txt)
          return <article key={predict.dt} className='forecast-card'>
              <div className='forecast__info'>
                <h3>{days[date.getDay()]}, {months[date.getMonth()]} {date.getDate()}</h3>
                <span className='forecast-description'>"{predict.weather[0].description}"</span>
                <ul className='forecast__data-cont'>
                  <li><i className='bx bx-wind'></i> {predict.wind.speed}m/s</li>
                  <li><i className='bx bx-cloud'></i> {predict.clouds.all}%</li>
                  <li><i className='bx bxs-thermometer'></i> {predict.main.pressure}hPa</li>
                </ul>
              </div>
              <div className='forecast__title-cont'>
                <h2 className='forecast-title'>{weather?.name} {weather?.sys.country}</h2>
                <div className='forecast__img-cont'><img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" /></div>
                <span>{temp}{isCelsius ? '°C' : '°F'}</span>
              </div>
          </article>
})}
      </div>
    </section >
  )
}

export default ForecastCard