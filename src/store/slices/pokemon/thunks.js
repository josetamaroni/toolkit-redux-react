import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = ( page = 0 ) => {
    console.log(page)
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        // TODO: realizar petición http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page }`);
        // const data = await resp.json();

        const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${ page }`);

        dispatch( setPokemons({
            nextPage: page+1,
            previousPage: page-1,
            page: page,
            pokemons: resp.data.results
        }) );
    }
}