import { configureStore } from '@reduxjs/toolkit'

import jobsReducer from './slices/jobSlice'
import filtersSlice from './slices/filtersSlice'

export default configureStore({
  reducer: {
    jobs : jobsReducer,
    filters : filtersSlice
  }
})