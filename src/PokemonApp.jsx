import React,{ useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemonsThunk } from './store/slices/pokemon/thunk'




export const PokemonApp = () => {

  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(getPokemonsThunk())
  }, [])
  const {isLoading,page,pokemons} = useSelector((state) => state.pokemonStore)
  console.log(page,pokemons)
  return (
    <>
       <h1>PokemonApp</h1>

       <hr />
       <h2>Page: {page} is loading: {isLoading.toString()}</h2>
       <ul>
         {
          pokemons.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))
         }
       </ul>
       <button onClick={() => dispatch(getPokemonsThunk(page))}>
         Next
       </button>
    </>
  )
}
