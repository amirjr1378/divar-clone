import { configureStore } from '@reduxjs/toolkit'

// import reducers
import cityReducer from './features/city/citySlice'
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from './localStorageHelpers'

const persistedState = loadStateFromLocalStorage() || {}

export const store = configureStore({
  devTools: true,
  reducer: {
    city: cityReducer,
  },
  preloadedState: persistedState,
})

// for local storage usage
store.subscribe(() => {
  saveStateToLocalStorage({
    city: store.getState().city,
  })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
