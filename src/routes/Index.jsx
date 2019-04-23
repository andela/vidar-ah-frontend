import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../components/404';
import Article from '../views/Article/Index';
import LandingPage from '../views/landingPage/Index';
import RequestPasswordReset from '../views/passwordReset/RequestPasswordReset';
import ResetPassword from '../views/passwordReset/ResetPassword';
import LoginPage from '../views/LoginPage';
import AuthWrapper from '../components/authRequired';
import CreateArticle from '../views/createArticle';
import Social from '../views/socialCallback/Index';
import ViewProfile from '../views/profilePage/ViewProfile';
import EditProfile from '../views/profilePage/EditProfile';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <AuthWrapper path="/create-article" exact component={CreateArticle} />
    <Route path="/social/callback" exact component={Social} />
    <Route path="/articles/:slug" component={Article} />
    <Route path="/requestpasswordreset" exact component={RequestPasswordReset} />
    <Route path="/resetpassword/:key" exact component={ResetPassword} />
    <Route path="/login" exact component={LoginPage} />
    <AuthWrapper path="/userprofile" component={ViewProfile} />
    <AuthWrapper path="/editprofile" component={EditProfile} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
