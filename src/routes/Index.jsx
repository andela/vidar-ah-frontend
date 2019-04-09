import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../components/404';
import Login from '../views/Login/Login';
import RequestPasswordReset from '../views/RequestPasswordReset/RequestPasswordReset';
import ResetPassword from '../views/ResetPassword/ResetPassword';
import Signup from '../views/SignUp/SignUp';
import Article from '../views/Article/Article';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/requestpasswordreset" exact component={RequestPasswordReset} />
    <Route path="/resetpassword" exact component={ResetPassword} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/article/:slug" component={Article} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
