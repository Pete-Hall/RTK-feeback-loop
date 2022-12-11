import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
}

export const understandingSlice = createSlice({
  name: 'understanding',
  initialState,
  reducers: {
    updateUnderstanding: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { updateUnderstanding } = understandingSlice.actions

export default understandingSlice.reducer