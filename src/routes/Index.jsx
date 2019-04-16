/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../components/404';
import CreateArticle from '../views/createArticle';
import Login from '../components/auth/Index';
import Article from '../views/article/Index';
import LandingPage from '../views/landingPage/Index';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/create-article" exact component={CreateArticle} />
    <Route path="/login" exact component={Login} />
    <Route path="/articles/:slug" component={Article} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
