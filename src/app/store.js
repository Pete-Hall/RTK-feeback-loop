import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Redux/counterSlice';
import feelingReducer from '../Redux/feelingSlice';
import understandingReducer from '../Redux/understandingSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    feeling: feelingReducer,
    understanding: understandingReducer,
  },
})