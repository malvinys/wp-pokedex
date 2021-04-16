import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchPokemonCompares, pokemonsSelector } from '../../models/Pokemons';

import Card from '../../components/Card/Card';
import ButtonRedirectToHome from '../../components/ButtonRedirectToHome/ButtonRedirectToHome';

import './ComparePage.scss';

const ComparePage = () => {
  const { idPokemon1, idPokemon2 } = useParams();
  const dispatch = useDispatch();
  const { pokemonCompares } = useSelector(pokemonsSelector);
  const pokemon1 = pokemonCompares ? pokemonCompares.pokemon1 : null;
  const pokemon2 = pokemonCompares ? pokemonCompares.pokemon2 : null;
  let pokemon1Status = null;
  let pokemon2Status = null;

  if (pokemon1 && pokemon2) {
    if (pokemon1.overall > pokemon2.overall) {
      pokemon1Status = 'WIN';
      pokemon2Status = 'LOSE';
    } else if (pokemon1.overall < pokemon2.overall) {
      pokemon1Status = 'LOSE';
      pokemon2Status = 'WIN';
    } else {
      pokemon1Status = 'DRAW';
      pokemon2Status = 'DRAW';
    }
  }

  useEffect(() => {
    dispatch(fetchPokemonCompares(idPokemon1, idPokemon2));
  }, [dispatch]);

  return (
    <div className="compare-page">
      {pokemon1 && (
        <Card
          key={pokemon1.id}
          id={pokemon1.id}
          name={pokemon1.name}
          image={pokemon1.image}
          types={pokemon1.types}
          hp={pokemon1.hp}
          attack={pokemon1.attack}
          defense={pokemon1.defense}
          speed={pokemon1.speed}
          status={pokemon1Status}
        />
      )}
      {pokemon2 && (
        <Card
          key={pokemon2.id}
          id={pokemon2.id}
          name={pokemon2.name}
          image={pokemon2.image}
          types={pokemon2.types}
          hp={pokemon2.hp}
          attack={pokemon2.attack}
          defense={pokemon2.defense}
          speed={pokemon2.speed}
          status={pokemon2Status}
        />
      )}
      <ButtonRedirectToHome />
    </div>
  );
};

export default ComparePage;
