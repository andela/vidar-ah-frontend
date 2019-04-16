import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import authReducer from './authReducer';
import fetchReducer from './fetchReducer';

export default combineReducers({
  articles: articleReducer,
  articleReducer,
  authReducer,
  fetchReducer
});
