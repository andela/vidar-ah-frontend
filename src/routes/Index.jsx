import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../components/404';
import Article from '../views/article/Index';
import LandingPage from '../views/landingPage/Index';
import RequestPasswordReset from '../views/passwordReset/RequestPasswordReset';
import ResetPassword from '../views/passwordReset/ResetPassword';
import LoginPage from '../views/LoginPage';
// import Article from '../views/Article/Article';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/articles/:slug" component={Article} />
    <Route path="/requestpasswordreset" exact component={RequestPasswordReset} />
    <Route path="/resetpassword/:key" exact component={ResetPassword} />
    <Route path="/login" exact component={LoginPage} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
