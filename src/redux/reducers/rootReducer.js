import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import authReducers from './authReducer';

export default combineReducers({
  articleReducer,
  authReducers
});
