import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../components/404';
import Article from '../views/Article/index';
import LandingPage from '../views/LandingPage/index';
import RequestPasswordReset from '../views/PasswordReset/RequestPasswordReset';
import ResetPassword from '../views/PasswordReset/ResetPassword';
import LoginPage from '../views/LoginPage';
import AuthWrapper from '../components/AuthRequired';
import CreateArticle from '../views/CreateArticle';
import Social from '../views/SocialCallback/index';
import ViewProfile from '../views/ProfilePage/ViewProfile';
import EditProfile from '../views/ProfilePage/EditProfile';
import Signup from '../views/Signup/index';
import VerifyAccount from '../components/VerifyEmail';
import ReportsPage from '../views/ReportedArticles/index';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <AuthWrapper path="/create-article" exact component={CreateArticle} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/social/callback" exact component={Social} />
    <Route path="/articles/:slug" component={Article} />
    <Route path="/requestpasswordreset" exact component={RequestPasswordReset} />
    <Route path="/resetpassword/:key" exact component={ResetPassword} />
    <Route path="/login" exact component={LoginPage} />
    <AuthWrapper path="/userprofile" component={ViewProfile} />
    <AuthWrapper path="/editprofile" component={EditProfile} />
    <Route path="/verify/:id" component={VerifyAccount} />
    <AuthWrapper path="/reports" component={ReportsPage} adminRequred />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
