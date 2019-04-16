import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../components/404';
import Login from '../components/auth/Index';
import Article from '../views/article/Index';
import LandingPage from '../views/landingPage/Index';

const Routes = () => (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Route path="/articles/:slug" component={Article} />
    <Route path="/" exact component={LandingPage} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
