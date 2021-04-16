/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import Api from '../configs/Api';
import Request from '../helpers/Request';

export const Pokemons = createSlice({
  name: 'pokemons',
  initialState: {
    pokemons: null,
    pokemon: null,
    pokemonCompares: null,
    floatingCompareBtn: [],
  },
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setAdditionalPokemons: (state, action) => {
      const { next, data } = action.payload;
      state.pokemons.next = next;

      for (let index = 0; index < data.length; index++) {
        const pokemon = data[index];
        state.pokemons.data.push(pokemon);
      }
    },
    setPokemon: (state, action) => {
      state.pokemon = action.payload;
    },
    setPokemonCompares: (state, action) => {
      state.pokemonCompares = action.payload;
    },
    setFloatingCompareBtn: (state, action) => {
      state.floatingCompareBtn.push(action.payload);
    },
    setFloatingCompareBtnReset: (state) => {
      state.floatingCompareBtn = [];
    },
  },
});

export const pokemonsActions = Pokemons.actions;
export const pokemonsSelector = (state) => state.pokemons;
export const pokemonsReducer = Pokemons.reducer;

export async function requestPokemonDetail(id) {
  const resPokemon = await Request.backend('GET', `${Api.getPokemons}/${id}`);
  const {
    name, sprites, types, stats,
  } = resPokemon;

  const image = sprites.front_default;
  const elementTypes = types.map((item) => item.type.name);
  const hp = stats.filter((item) => item.stat.name === 'hp').map((item) => item.base_stat)[0];
  const attack = stats.filter((item) => item.stat.name === 'attack').map((item) => item.base_stat)[0];
  const defense = stats.filter((item) => item.stat.name === 'defense').map((item) => item.base_stat)[0];
  const speed = stats.filter((item) => item.stat.name === 'speed').map((item) => item.base_stat)[0];
  const overall = hp + attack + defense + speed;

  return ({
    id, name, image, types: elementTypes, hp, attack, defense, speed, overall,
  });
}

export const reConstructListPokemons = async (pokemons) => {
  const { count, next } = pokemons;
  const listPokemons = pokemons.results;
  const data = [];

  for (let index = 0; index < listPokemons.length; index++) {
    const { url } = listPokemons[index];
    const id = url.replace(`${Api.baseUrl}${Api.getPokemons}`, '').replace(/\//g, '');
    const pokemonDetail = await requestPokemonDetail(id);
    data.push(pokemonDetail);
  }

  return { count, next, data };
};

export const setPokemonsReducer = async (dispatch, pokemons) => {
  const { count, next, data } = await reConstructListPokemons(pokemons);
  dispatch(pokemonsActions.setPokemons({ count, next, data }));
};

export const setAdditionalPokemonsReducer = async (dispatch, pokemons) => {
  const { count, next, data } = await reConstructListPokemons(pokemons);
  dispatch(pokemonsActions.setAdditionalPokemons({ count, next, data }));
};

export const fetchPokemons = (nextPageUrl = null) => async (dispatch) => {
  if (!nextPageUrl) {
    const resPokemons = await Request.backend('GET', Api.getPokemons);
    setPokemonsReducer(dispatch, resPokemons);
  } else {
    const params = nextPageUrl.replace(`${Api.baseUrl}${Api.getPokemons}`, '');
    const resPokemons = await Request.backend('GET', `${Api.getPokemons}${params}`);
    setAdditionalPokemonsReducer(dispatch, resPokemons);
  }
};

export const fetchPokemonsByType = (url) => async (dispatch) => {
  const typeId = url.replace(`${Api.baseUrl}${Api.getTypes}`, '').replace(/\//g, '');
  const urlPokemonsByType = typeId ? `${Api.getTypes}/${typeId}` : `${Api.getPokemons}`;
  const resPokemons = await Request.backend('GET', urlPokemonsByType);

  const pokemons = resPokemons.results
    ? resPokemons.results
    : resPokemons.pokemon.filter((item, i) => i < 20).map((item) => item.pokemon);
  const count = resPokemons.count ? resPokemons.count : pokemons.length;
  const next = resPokemons.next ? resPokemons.next : null;
  setPokemonsReducer(dispatch, { count, next, results: pokemons });
};

export const fetchPokemon = (id) => async (dispatch) => {
  const resPokemon = await requestPokemonDetail(id);
  dispatch(pokemonsActions.setPokemon(resPokemon));
};

export const fetchPokemonCompares = (pokemon1Id, pokemon2Id) => async (dispatch) => {
  const pokemon1 = await requestPokemonDetail(pokemon1Id);
  const pokemon2 = await requestPokemonDetail(pokemon2Id);
  dispatch(pokemonsActions.setPokemonCompares({ pokemon1, pokemon2 }));
};
