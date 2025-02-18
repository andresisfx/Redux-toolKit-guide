import { configureStore } from '@reduxjs/toolkit' ;
import {counterSlice, PokemonSlice} from './slices'

export const store = configureStore({
  reducer: {
    counterStore: counterSlice.reducer,
    pokemonStore:PokemonSlice.reducer
  },
})

console.log(counterSlice.reducer)