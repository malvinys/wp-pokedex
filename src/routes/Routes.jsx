import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import DetailPage from '../pages/DetailPage/DetailPage';
import ComparePage from '../pages/ComparePage/ComparePage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/detail/:id" component={DetailPage} />
      <Route exact path="/compare/:idPokemon1/:idPokemon2" component={ComparePage} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
