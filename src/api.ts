import axios from "axios"
import { Forecast, LatLon, Weather } from "./types"

const ApiKey = '5dd8ee3a86f556c9f03b957f51356c37'

export const DATA = [
    {
        name: "Miami US",
        key: "Miami",
        info:  {
            lat: 25.761681,
            lon: -80.191788
        },
        img: 'https://media.timeout.com/images/105695117/image.jpg'
    },
    {
        name: "London UK",
        key: "London",
        info: {
            lat: 51.509865,
            lon: -0.118092
        },
        img: "https://www.london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz"
    },
    {
        name: "Paris FR",
        key: "Paris",
        info: {
            lat: 48.8534,
            lon: 2.3488
        },
        img: "https://www.pueblalife.com.mx/wp-content/uploads/2017/11/Paris-FR.jpg"
    },
    {
        name: "Barcelona ES",
        key: "Barcelona",
        info: {
            lat: 41.390205,
            lon: 2.154007
        },
        img: "https://offloadmedia.feverup.com/barcelonasecreta.com/wp-content/uploads/2015/08/09112607/barcelona-foto.jpg"
    },
    {
        name: "Tokyo JP",
        key: "Tokyo",
        info: {
            lat: 35.689,
            lon: 139.692
        },
        img: "https://images.ctfassets.net/ihlmn42cjuv0/5ZiH8atL5GRwT5XpadOlKU/974a45d4b76ee446fe133c0cded97f20/hero-tokyo.jpg?fit=fill&w=1346&h=838&fm=jpg&q=93"
    }
]

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

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