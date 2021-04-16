import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { pokemonFiltersReducer } from './PokemonFilters';
import { pokemonsReducer } from './Pokemons';

const store = configureStore({
  reducer: {
    pokemonFilters: pokemonFiltersReducer,
    pokemons: pokemonsReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
