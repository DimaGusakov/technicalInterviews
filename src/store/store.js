import { configureStore } from '@reduxjs/toolkit'
import { databaseApi } from '../service/databaseApi'
import resultReducer from "./slices/resultSlice"
import testReducer from "./slices/testSlice"

export const store = configureStore({
  reducer: {
    results: resultReducer,
    testData: testReducer,
    [databaseApi.reducerPath]: databaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(databaseApi.middleware),
})