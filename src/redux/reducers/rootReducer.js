import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import authReducer from './authReducer';
import fetchReducer from './fetchReducer';

export default combineReducers({
  articleReducer,
  authReducer,
  fetchReducer,
});
