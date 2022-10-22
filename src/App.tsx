import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { api, DATA } from './api'
import './App.css'
import CitiesSelector from './components/CitiesSelector'
import ForecastCard from './components/ForecastCard'
import WeatherCard from './components/WeatherCard'
import { setWeather } from './store/slices/weather.slice'
import { LatLon } from './types'
import { City, Weather } from '../src/types'
import { RootState } from './store'
import Loading from './components/Loading'

function App() {

  const [cities, setCities] = useState<City[]>(DATA)

  // Temperature states
  const [temp, setTemp] = useState<number>()
  const [isCelsius, setIsCelsius] = useState<Boolean>(true)

  const dispatch = useDispatch()

  const success = (response: any) => {
    // Temporal object to send it as an argument
    const info: LatLon = {
      lat: response.coords.latitude,
      lon: response.coords.longitude
    }

    // Weather of user request it through api.ts
    api.data(info)
      .then(res => {
        dispatch(setWeather(res))
        setCities((cities: City[]): City[] => {
          cities.unshift({
            name: res.name + ' ' + res.sys.country,
            info: {
              lat: res.coord.lat,
              lon: res.coord.lon
            }
          })
          return [...cities]
        })
      })
      .catch(err => console.log(err))
  }

  // Setting up the current weather of the user in the redux weather state
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  const weather = useSelector((state: RootState) => state.weather)

  return (
      <div className="App" style={{backgroundImage: `url('/src/assets/img/${weather.name}.jpg')`}}>
        {weather.name ? <><nav className='nav__section'>
          <CitiesSelector cities={cities} />
        </nav>
          <main className='main'>
            <WeatherCard setTemp={setTemp} setIsCelsius={setIsCelsius} temp={temp} isCelsius={isCelsius} /><ForecastCard setTemp={setTemp} setIsCelsius={setIsCelsius} temp={temp} isCelsius={isCelsius} />
          </main></> : <Loading />}
      </div>
  )
}

export default App
