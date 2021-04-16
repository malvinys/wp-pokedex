import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPokemonFilterTypes, pokemonFiltersSelector } from '../../models/PokemonFilters';
import { fetchPokemons, fetchPokemonsByType, pokemonsSelector } from '../../models/Pokemons';

import Card from '../../components/Card/Card';
import FloatingCompare from '../../components/FloatingCompare/FloatingCompare';

import './HomePage.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const { types } = useSelector(pokemonFiltersSelector);
  const { pokemons, floatingCompareBtn } = useSelector(pokemonsSelector);
  const comparePokemon1 = floatingCompareBtn.length > 0 ? floatingCompareBtn[0] : null;
  const comparePokemon2 = floatingCompareBtn.length > 1 ? floatingCompareBtn[1] : null;
  const comparePokemon1Id = comparePokemon1 ? comparePokemon1.id : null;
  const comparePokemon1Name = comparePokemon1 ? comparePokemon1.name : null;
  const comparePokemon2Id = comparePokemon2 ? comparePokemon2.id : null;
  const comparePokemon2Name = comparePokemon2 ? comparePokemon2.name : null;

  useEffect(() => {
    dispatch(fetchPokemonFilterTypes());
    dispatch(fetchPokemons());
  }, [dispatch]);

  const handleTypeChange = (e) => {
    const typeUrl = e.target.value;
    dispatch(fetchPokemonsByType(typeUrl));
  };

  const handleNextPageClick = (url) => {
    dispatch(fetchPokemons(url));
  };

  return (
    <div className="home-page">
      <h1 className="home-page-title">Pokedex</h1>
      <div className="home-page-filter">
        <div className="form-group">
          <select className="form-control" onChange={(e) => handleTypeChange(e)}>
            <option value="">All Types</option>
            {types.map((item) => (
              <option key={item.url} value={item.url}>{item.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="home-page-card-container">
        {pokemons && pokemons.data.map((pokemon) => (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
            btnDetail
            btnAddCompare
          />
        ))}
      </div>
      {pokemons && pokemons.next && (
        <button type="button" className="btn btn-success home-page-card-load-more" onClick={() => handleNextPageClick(pokemons.next)}>Load More</button>
      )}
      <FloatingCompare
        pokemon1Id={comparePokemon1Id}
        pokemon1Name={comparePokemon1Name}
        pokemon2Id={comparePokemon2Id}
        pokemon2Name={comparePokemon2Name}
      />
    </div>
  );
};

export default HomePage;
