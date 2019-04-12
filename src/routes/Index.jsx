/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../components/404';
import LandingPage from '../views/LandingPage';
import LoginPage from '../views/LoginPage';
import RequestPasswordReset from '../views/passwordReset/RequestPasswordReset';
import ResetPassword from '../views/passwordReset/ResetPassword';
import CreateArticle from '../views/createArticle';
import Article from '../views/Article/Article';
import Signup from '../views/signup/Index';
// import VerifyEmail from '../components/checkEmail';
import VerifyAccount from '../components/verifyEmail';
import Profile from '../views/profile/Index';
import AuthRequired from '../components/authRequired';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/requestpasswordreset" exact component={RequestPasswordReset} />
    <Route path="/resetpassword/:key" exact component={ResetPassword} />
    <Route path="/login" exact component={LoginPage} />
    <AuthRequired path="/create-article" exact component={CreateArticle} />
    <Route path="/articles/:slug" component={Article} />
    <Route path="/signup" exact component={Signup} />
    {/* <Route path="/verify_email" component={VerifyEmail} /> */}
    <Route path="/verify/:id" component={VerifyAccount} />
    <Route path="/profile" component={Profile} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
