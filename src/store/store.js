import { configureStore } from '@reduxjs/toolkit' ;
import {counterSlice, PokemonSlice} from './slices'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon:PokemonSlice.reducer
  },
})

console.log(counterSlice.reducer)