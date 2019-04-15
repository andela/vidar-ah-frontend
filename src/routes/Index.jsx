/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../components/404';
import CreateArticle from '../views/createArticle';
import Article from '../views/Article/Article';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/create-article" exact component={CreateArticle} />
    <Route path="/articles/:slug" component={Article} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
