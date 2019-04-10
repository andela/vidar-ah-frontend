/* eslint-disable import/no-unresolved */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../components/404';
import Login from '../components/auth/Login';
import Signup from '../views/signup';
import VerifyEmail from '../components/CheckEmail';
import VerifyAccount from '../components/VerifyEmail';
import Profile from '../views/profile';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/verify_email" component={VerifyEmail} />
    <Route path="/verify" component={VerifyAccount} />
    <Route path="/profile" component={Profile} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
