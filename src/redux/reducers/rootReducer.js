import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import authReducer from './authReducer';
import fetchReducer from './fetchReducer';
import reportsReducer from './reportsReducer';
import statsReducer from './statsReducer';

export default combineReducers({
  articles: articleReducer,
  articleReducer,
  authReducer,
  fetchReducer,
  reportsReducer,
  statsReducer,
});
