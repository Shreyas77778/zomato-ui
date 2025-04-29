import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
  status: 'idle',
  error: null
}

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    setRestaurants: (state, action) => {
      state.list = action.payload
      state.status = 'succeeded'
    }
  }
})

export const { setRestaurants } = restaurantsSlice.actions
export default restaurantsSlice.reducer