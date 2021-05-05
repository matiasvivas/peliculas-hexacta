import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Movie from './pages/Movie/index';

const Router = () => (
  <BrowserRouter>
  <div className="main">
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route
        exact
        path="/movie/:movieid"
        component={Movie}
      />
    </Switch>
  </div>
  </BrowserRouter>
);

export default Router;
