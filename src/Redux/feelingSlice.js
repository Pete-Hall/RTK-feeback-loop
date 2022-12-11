import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
}

export const feelingSlice = createSlice({
  name: 'feeling',
  initialState,
  reducers: {
    updateFeeling: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { updateFeeling } = feelingSlice.actions

export default feelingSlice.reducer // TODO: what does the .reducer do? we import this into the store.js