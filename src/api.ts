import axios from "axios"
import { Forecast, LatLon, Weather } from "./types"

const ApiKey = '5dd8ee3a86f556c9f03b957f51356c37'

export const DATA = [
    {
        name: "Miami US",
        info:  {
            lat: 25.761681,
            lon: -80.191788
        }
    },
    {
        name: "London UK",
        info: {
            lat: 51.509865,
            lon: -0.118092
        }
    },
    {
        name: "Paris FR",
        info: {
            lat: 48.8534,
            lon: 2.3488
        }
    },
    {
        name: "Barcelona ES",
        info: {
            lat: 41.390205,
            lon: 2.154007
        }
    },
    {
        name: "Tokyo JP",
        info: {
            lat: 35.689,
            lon: 139.692
        }
    }
]

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"]

export const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export const api = {
    data: async (info: LatLon): Promise<Weather> => {
        let data: Weather
        return data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${info.lat}&lon=${info.lon}&appid=${ApiKey}`)
            .then(res => res.data)
            .catch(err => console.log(err))
    },
    forecast: async (info: LatLon): Promise<Forecast> => {
        let data: Weather
        return data = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${info.lat}&lon=${info.lon}&appid=${ApiKey}`)
            .then(res => res.data)
            .catch(err => console.log(err))
    },
    length: DATA.length
}