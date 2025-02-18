import { createSlice } from '@reduxjs/toolkit';

export const PokemonSlice = createSlice({
    name: 'Pokemon',
    initialState: {
        page:0,
        pokemons:[],
        isLoading:false
    },
    reducers: {
        setIsLoading:(state)=>{
            state.isLoading=true
        },
        setPokemons:(state,action)=>{
            state.pokemons=action.payload
            state.isLoading=false
        }
    }
});



export const { setIsLoading } = PokemonSlice.actions;