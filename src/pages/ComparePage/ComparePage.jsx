import React from 'react';

import Card from '../../components/Card/Card';
import ButtonRedirectToHome from '../../components/ButtonRedirectToHome/ButtonRedirectToHome';

import './ComparePage.scss';

const ComparePage = () => (
  <div className="compare-page">
    <Card />
    <Card />
    <ButtonRedirectToHome />
  </div>
);

export default ComparePage;
