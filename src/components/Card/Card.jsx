import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { pokemonsActions, pokemonsSelector } from '../../models/Pokemons';

import './Card.scss';

const Card = ({
  id, name, image, types, hp, attack, defense, speed, status, btnDetail, btnAddCompare,
}) => {
  const dispatch = useDispatch();
  const { floatingCompareBtn } = useSelector(pokemonsSelector);
  const isCompareBtnDisabled = floatingCompareBtn.filter((item) => item.id === id).length > 0
    || floatingCompareBtn.length === 2;

  const handleCompareButtonClick = () => {
    dispatch(pokemonsActions.setFloatingCompareBtn({ id, name }));
  };

  return (
    <>
      {id && (
      <div className="card-item">
        <img src={image} alt="" />
        <h2>{name}</h2>
        <div className="card-item-type">
          {types.map((item) => (
            <p key={`${item}`}>{item}</p>
          ))}
        </div>
        {hp && (
        <p>
          HP:&nbsp;
          {hp}
        </p>
        )}
        {attack && (
        <p>
          Attack:&nbsp;
          {attack}
        </p>
        )}
        {defense && (
        <p>
          Defense:&nbsp;
          {defense}
        </p>
        )}
        {speed && (
        <p>
          Speed:&nbsp;
          {speed}
        </p>
        )}
        {status && <p className="card-item-status">{status}</p>}
        {btnDetail && (
        <a href={`/detail/${id}`} className="btn btn-primary card-item-btn-detail">
          Detail
        </a>
        )}
        {btnAddCompare && (
          <button
            type="button"
            className="btn btn-warning card-item-btn-compare"
            disabled={isCompareBtnDisabled}
            onClick={() => handleCompareButtonClick()}
          >
            Add Compare
          </button>
        )}
      </div>
      )}

    </>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
  hp: PropTypes.number,
  attack: PropTypes.number,
  defense: PropTypes.number,
  speed: PropTypes.number,
  status: PropTypes.string,
  btnDetail: PropTypes.bool,
  btnAddCompare: PropTypes.bool,
};

Card.defaultProps = {
  id: null,
  name: null,
  image: 'https://i1.wp.com/www.cssscript.com/wp-content/uploads/2014/10/iOS-OS-X-Style-Pure-CSS-Loading-Spinner.jpg?fit=400%2C300&ssl=1',
  types: [],
  hp: null,
  attack: null,
  defense: null,
  speed: null,
  status: null,
  btnDetail: false,
  btnAddCompare: false,
};

export default Card;
