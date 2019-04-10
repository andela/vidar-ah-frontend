import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../components/404';
import Login from '../views/Login';
import RequestPasswordReset from '../views/PasswordReset/RequestPasswordReset';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/requestpasswordreset" exact component={RequestPasswordReset} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
