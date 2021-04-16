/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import Api from '../configs/Api';
import Request from '../helpers/Request';

export const PokemonFilters = createSlice({
  name: 'pokemonFilters',
  initialState: {
    types: [],
  },
  reducers: {
    setTypes: (state, action) => {
      state.types = action.payload;
    },
  },
});

export const pokemonFiltersActions = PokemonFilters.actions;
export const pokemonFiltersSelector = (state) => state.pokemonFilters;
export const pokemonFiltersReducer = PokemonFilters.reducer;

export const fetchPokemonFilterTypes = () => async (dispatch) => {
  const resTypes = await Request.backend('GET', Api.getTypes);
  dispatch(pokemonFiltersActions.setTypes(resTypes.results));
};
