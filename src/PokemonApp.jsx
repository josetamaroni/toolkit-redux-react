import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {
  
  const { isLoading, page, nextPage, previousPage, pokemons } = useSelector( state => state.pokemons );
  const dispatch =  useDispatch();


  useEffect(() => {
    dispatch( getPokemons() );
  }, [])
  
  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      {
        isLoading 
        ? <span>Cargando Pokemons...</span> 
        : ''
      }

      <ul>
        {
          pokemons.map(({name,url})=>{
            return <li key={name}>{name}</li>
          })
        }
      </ul>

      <button disabled={isLoading} onClick={ ()=> dispatch( getPokemons(previousPage) ) }>Previous</button>
      <span>Page: {page}</span>
      <button disabled={isLoading} onClick={ ()=> dispatch( getPokemons(nextPage) ) }>Next</button>
    </>
  )
}
