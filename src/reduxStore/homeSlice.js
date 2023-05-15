import { createSlice } from '@reduxjs/toolkit'


export const homeSlice = createSlice({
  name: 'home',
  // This is state to store fetched data
  initialState: {
    url: {},
    genres: {},
  },

  // This is methods to handle state changes
  reducers: {
    // this is methods to handle fetched data
    getApiConfigration: (state, action) => {
        state.url = action.payload;
    },

    //this is methods to handle genres
    getGenres: (state, action) => {
        state.genres = action.payload;
    },
  },
})

// Export the methods for change state from outside
export const {getApiConfigration, getGenres} = homeSlice.actions

export default homeSlice.reducer