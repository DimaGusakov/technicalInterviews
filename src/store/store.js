import { configureStore } from '@reduxjs/toolkit'
import { databaseApi } from '../service/databaseApi'

export const store = configureStore({
  reducer: {
    [databaseApi.reducerPath]: databaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(databaseApi.middleware),
})