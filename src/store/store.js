import { configureStore } from '@reduxjs/toolkit'
import { databaseApi } from '../service/databaseApi'
import resultReducer from "./slices/resultSlice"

export const store = configureStore({
  reducer: {
    results: resultReducer,
    [databaseApi.reducerPath]: databaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(databaseApi.middleware),
})