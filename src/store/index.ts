import { configureStore } from '@reduxjs/toolkit'
import weather from './slices/weather.slice'

export const store = configureStore({
  reducer: {
    weather
  }
}) 

export default store;

export type RootState = ReturnType<typeof store.getState>