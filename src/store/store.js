import { configureStore } from '@reduxjs/toolkit' ;
import {counterSlice} from './slices'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
})

console.log(counterSlice.reducer)