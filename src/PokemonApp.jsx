import React,{ useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemonsThunk } from './store/slices/pokemon/thunk'




export const PokemonApp = () => {

  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(getPokemonsThunk())
  }, [])
  const {page,pokemons} = useSelector((state) => state.pkemon)
  console.log(page,pokemons)
  return (
    <>
       <h1>PokemonApp</h1>

       <hr />
       <ul>
        <li>hi i a here</li>
        <li>hi i a here</li>
        <li>hi i a here</li>
        <li>hi i a here</li>
       </ul>
    </>
  )
}
