import {setIsLoading, setPokemons} from './'
export const getPokemonsThunk =(page=0)=>{
    return async(dispatch,getState)=>{
        dispatch(setIsLoading())
        //TODO: make hhtp call
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`)
        const data = await res.json()
        dispatch(setPokemons(data.results))
        console.log(data.results)
    }

}