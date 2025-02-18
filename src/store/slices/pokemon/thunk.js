import {setIsLoading, setPokemons} from './'
import { pokemonApi } from '../../../api/pokemonApi'
export const getPokemonsThunk =(page=0)=>{
    return async(dispatch,getState)=>{
        dispatch(setIsLoading())
        //TODO: make hhtp call
        const {data}=await pokemonApi.get(`/pokemon?limit=10&offset=${page*10}`)
        dispatch(setPokemons({page:page+1,pokemons:data.results}))
        console.log(data.results)
    }

}