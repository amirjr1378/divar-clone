import { combineReducers, configureStore } from '@reduxjs/toolkit'
// redux persist imports
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// import reducers
import cityReducer from './features/city/citySlice'

const rootReducer = combineReducers({
  city: cityReducer,
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

export const store = configureStore({
  devTools: true,
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
