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
            state.pokemons=action.payload.pokemons
            state.isLoading=false
            state.page=action.payload.page
        }
    }
});



export const { setIsLoading, setPokemons } = PokemonSlice.actions;