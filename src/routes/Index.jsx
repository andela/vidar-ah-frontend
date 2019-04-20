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
import Signup from '../views/signup/Index';
import VerifyAccount from '../components/VerifyEmail';
import ReportsPage from '../views/reportedArticles/Index';
import EditArticle from '../views/editArticle/Index';


const Routes = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <AuthWrapper path="/create-article" exact component={CreateArticle} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/social/callback" exact component={Social} />
    <Route path="/edit-article/:slug" exact component={EditArticle} />
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
