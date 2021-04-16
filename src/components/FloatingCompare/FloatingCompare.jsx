import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { pokemonsActions } from '../../models/Pokemons';

import './FloatingCompare.scss';

const FloatingCompare = ({
  pokemon1Id, pokemon1Name, pokemon2Id, pokemon2Name,
}) => {
  const dispatch = useDispatch();

  const isCompareShow = (pokemon1Id || pokemon2Id);
  const isCompareDisabled = !(pokemon1Id && pokemon2Id);
  const pokemon1IdUrl = pokemon1Id ? `/${pokemon1Id}` : '';
  const pokemon2IdUrl = pokemon2Id ? `/${pokemon2Id}` : '';
  const compareLink = `/compare${pokemon1IdUrl}${pokemon2IdUrl}`;

  const handleCompareClick = () => {
    window.location = compareLink;
  };

  const handleCompareCloseClick = () => {
    dispatch(pokemonsActions.setFloatingCompareBtnReset());
  };

  return (
    <>
      {isCompareShow && (
        <div className="floating-compare">
          <div className="floating-compare-top">
            <p className="floating-compare-top-pokemon-1">{pokemon1Name}</p>
            <p className="floating-compare-top-vs">VS</p>
            <p className="floating-compare-top-pokemon-2">{pokemon2Name}</p>
          </div>
          <div className="floating-compare-bottom">
            <button type="button" className="btn btn-secondary floating-compare-bottom-close" onClick={() => handleCompareCloseClick()}>
              Close
            </button>
            <button type="button" className="btn btn-warning floating-compare-bottom-submit" disabled={isCompareDisabled} onClick={() => handleCompareClick()}>
              Compare
            </button>
          </div>
        </div>
      )}
    </>
  );
};

FloatingCompare.propTypes = {
  pokemon1Id: PropTypes.string,
  pokemon1Name: PropTypes.string,
  pokemon2Id: PropTypes.string,
  pokemon2Name: PropTypes.string,
};

FloatingCompare.defaultProps = {
  pokemon1Id: null,
  pokemon1Name: '???',
  pokemon2Id: null,
  pokemon2Name: '???',
};

export default FloatingCompare;
