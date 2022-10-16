import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Weather } from '../../types';

export const weatherSlice = createSlice({
    name: 'Weather',
    initialState: {} as Weather,
    reducers: {
        setWeather: (state: Weather, action: PayloadAction<Weather>): Weather => action.payload
    }
})

export const { setWeather } = weatherSlice.actions;

export default weatherSlice.reducer;