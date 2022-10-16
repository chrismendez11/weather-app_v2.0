export type Weather = {
    "coord": {
      "lon": number,
      "lat": number
    },
    "weather": [
      {
        "id": number
        "main": string,
        "description": string,
        "icon": "10d"
      }
    ],
    "base": string,
    "main": {
      "temp": number,
      "feels_like": number,
      "temp_min": number,
      "temp_max": number,
      "pressure": number
      "humidity": number
      "sea_level": number
      "grnd_level": number
    }
    "visibility": number
    "wind": {
      "speed": number,
      "deg": number
      "gust": number
    },
    "rain": {
      "1h": number
    },
    "clouds": {
      "all": number
    }
    "dt": number
    "sys": {
      "type": number,
      "id": number
      "country": string,
      "sunrise": number
      "sunset": number
    },
    "timezone": number,
    "id": number,
    "name": string,
    "cod": number      
}

export type LatLon = {
  lat: number,
  lon: number
}

export type City = {
  name: string,
  info: LatLon
}

export type Forecast = {
  cod: string
  message: number
  cnt: number
  list: ForecastList[]
  city: City
}

export type ForecastList = {
  dt: number
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    grnd_level: number
    humidity: number
    temp_kf: number
  }
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  clouds: {
    all: number
  }
  wind: {
    speed: number
    deg: number
    gust: number
  }
  visibility: number
  pop: number
  rain: {
    "3h": number
  }
  sys: {
    pod: string
  }
  dt_txt: string
}