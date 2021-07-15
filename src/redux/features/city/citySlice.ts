import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICity } from '@/types'

import type { RootState } from '../../store'

// Define the initial state using that type
const initialState: Partial<ICity> = {}

export const citySlicer = createSlice({
  name: 'city',
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<ICity>) => {
      return action.payload
    },
    removeCity: () => ({}),
  },
})

export const { changeCity, removeCity } = citySlicer.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCity = (state: RootState) =>
  state.city?.id ? state.city : null

export default citySlicer.reducer
