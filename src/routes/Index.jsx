import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../components/404';
import Login from '../components/auth/Login';
import LandingPage from '../views/landingPage';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/login" exact component={Login} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
