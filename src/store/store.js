import { configureStore } from '@reduxjs/toolkit' ;
import {counterSlice, PokemonSlice} from './slices'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pkemon:PokemonSlice.reducer
  },
})

console.log(counterSlice.reducer)