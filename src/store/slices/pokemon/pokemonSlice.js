import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState:{
        page: 0,
        nextPage: 0,
        previousPage: 0,
        pokemons: [],
        isLoading: false
    },
    reducers: {
        startLoadingPokemons: (state,/*action*/) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.nextPage = action.payload.nextPage;
            state.previousPage = action.payload.previousPage;
            state.pokemons = action.payload.pokemons;
        }
    },
})


export const { startLoadingPokemons,setPokemons } = pokemonSlice.actions