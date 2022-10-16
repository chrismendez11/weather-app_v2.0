import { applyMiddleware } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DATA } from '../api'
import { RootState } from '../store'
import { City, Weather } from '../types'
import { api } from '../api'
import { setWeather } from '../store/slices/weather.slice'
import '../styles/CitiesSelector.css'

type Props = {
  cities: City[] 
}

const CitiesSelector = ({cities}: Props) => {

  const dispatch = useDispatch()

  // Change weather to City selected
  const handleCurrentWeather = (e: React.ChangeEvent<HTMLSelectElement>) => {

    const newWeather = cities.filter(city => city.name === e.target.value)

    api.data(newWeather[0].info) 
      .then(res => dispatch(setWeather(res)))
      .catch(err => console.log(err))
  }

  return (
      <select onChange={handleCurrentWeather} id="citySelect" className='select__container'>
        {cities.length > api.length && cities?.map(city => (
          <option value={city.name} key={city.name}>{city.name}</option>
        ))}
      </select>
  )
}

export default CitiesSelector

