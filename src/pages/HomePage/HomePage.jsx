import React from 'react';

import Card from '../../components/Card/Card';
import FloatingCompare from '../../components/FloatingCompare/FloatingCompare';

import './HomePage.scss';

const HomePage = () => (
  <div className="home-page">
    <h1 className="home-page-title">Pokedex</h1>
    <div className="home-page-filter">
      <div className="form-group">
        <select className="form-control">
          <option value="">Choose Type</option>
        </select>
      </div>
    </div>
    <div className="home-page-card-container">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <button type="button" className="btn btn-success home-page-card-load-more">Load More</button>
    <FloatingCompare />
  </div>
);

export default HomePage;
