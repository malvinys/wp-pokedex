import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

const Card = ({
  name, image, elements, hp, attack, defense, speed, status, btnDetail, btnAddCompare,
}) => (
  <>
    {name && (
    <div className="card-item">
      <img src={image} alt="" />
      <h2>{name}</h2>
      <div className="card-item-type">
        {elements.map((item) => (
          <p key={`${item}`}>{item}</p>
        ))}
      </div>
      {hp && (
      <p>
        HP:
        {hp}
      </p>
      )}
      {attack && (
      <p>
        Attack:
        {attack}
      </p>
      )}
      {defense && (
      <p>
        Defense:
        {defense}
      </p>
      )}
      {speed && (
      <p>
        Speed:
        {speed}
      </p>
      )}
      {status && <p style={{ textAlign: 'center' }}>{status}</p>}
      {btnDetail && <button type="button" className="btn btn-primary card-item-btn-detail">Detail</button>}
      {btnAddCompare && <button type="button" className="btn btn-warning card-item-btn-compare">Add Compare</button>}
    </div>
    )}

  </>
);

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  elements: PropTypes.arrayOf(PropTypes.string),
  hp: PropTypes.number,
  attack: PropTypes.number,
  defense: PropTypes.number,
  speed: PropTypes.number,
  status: PropTypes.string,
  btnDetail: PropTypes.bool,
  btnAddCompare: PropTypes.bool,
};

Card.defaultProps = {
  name: 'test',
  image: 'https://i1.wp.com/www.cssscript.com/wp-content/uploads/2014/10/iOS-OS-X-Style-Pure-CSS-Loading-Spinner.jpg?fit=400%2C300&ssl=1',
  elements: [],
  hp: null,
  attack: null,
  defense: null,
  speed: null,
  status: null,
  btnDetail: false,
  btnAddCompare: false,
};

export default Card;
