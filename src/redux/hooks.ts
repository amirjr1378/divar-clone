import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { selectCity } from './features/city/citySlice'
import type { AppDispatch, RootState } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// use features with hooks
export const useCity = () => useAppSelector(selectCity)
