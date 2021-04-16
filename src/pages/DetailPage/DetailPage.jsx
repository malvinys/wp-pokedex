import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchPokemon, pokemonsSelector } from '../../models/Pokemons';

import Card from '../../components/Card/Card';
import ButtonRedirectToHome from '../../components/ButtonRedirectToHome/ButtonRedirectToHome';

import './DetailPage.scss';

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { pokemon } = useSelector(pokemonsSelector);

  useEffect(() => {
    dispatch(fetchPokemon(id));
  }, [dispatch]);

  return (
    <div className="detail-page">
      {pokemon && (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
          hp={pokemon.hp}
          attack={pokemon.attack}
          defense={pokemon.defense}
          speed={pokemon.speed}
        />
      )}
      <ButtonRedirectToHome />
    </div>
  );
};

export default DetailPage;
