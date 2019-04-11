import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../components/404';
import LandingPage from '../views/LandingPage';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
