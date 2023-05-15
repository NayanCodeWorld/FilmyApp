// Makeing Redux-toolkit Store
import { configureStore } from '@reduxjs/toolkit'

// import home slice
import homeSlice from './homeSlice'

//Configur slice in Redux-toolkit Store
export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
})