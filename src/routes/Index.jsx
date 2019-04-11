/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../components/404';
import LandingPage from '../views/LandingPage';
import LoginPage from '../views/LoginPage';
import RequestPasswordReset from '../views/passwordReset/RequestPasswordReset';
import ResetPassword from '../views/passwordReset/ResetPassword';
import CreateArticle from '../views/createArticle';
import Article from '../views/Article/Article';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/requestpasswordreset" exact component={RequestPasswordReset} />
    <Route path="/resetpassword/:key" exact component={ResetPassword} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/create-article" exact component={CreateArticle} />
    <Route path="/articles/:slug" component={Article} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
