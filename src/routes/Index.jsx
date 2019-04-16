/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../components/404';
import CreateArticle from '../views/createArticle';
import Login from '../components/auth/Index';
import Article from '../views/Article/Index';
import LandingPage from '../views/landingPage/Index';
import RequestPasswordReset from '../views/passwordReset/RequestPasswordReset';
import ResetPassword from '../views/passwordReset/ResetPassword';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/create-article" exact component={CreateArticle} />
    <Route path="/login" exact component={Login} />
    <Route path="/articles/:slug" component={Article} />
    <Route path="/requestpasswordreset" exact component={RequestPasswordReset} />
    <Route path="/resetpassword/:key" exact component={ResetPassword} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
