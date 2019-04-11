import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../components/404';
import LoginPage from '../views/LoginPage';
import RequestPasswordReset from '../views/PasswordReset/RequestPasswordReset';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/requestpasswordreset" exact component={RequestPasswordReset} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
