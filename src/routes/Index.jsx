import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../components/404';
import Article from '../views/Article/Article';
import RequestPasswordReset from '../views/passwordReset/RequestPasswordReset';
import ResetPassword from '../views/passwordReset/ResetPassword';

const Routes = () => (
  <Switch>
    <Route path="/articles/:slug" component={Article} />
    <Route path="/requestpasswordreset" exact component={RequestPasswordReset} />
    <Route path="/resetpassword/:key" exact component={ResetPassword} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
