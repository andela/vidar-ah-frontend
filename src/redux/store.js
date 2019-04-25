import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { CURRENT_USER, VIEW_PROFILE } from './actions/actionTypes';
import rootReducer from './reducers/rootReducer';

const { NODE_ENV } = process.env;

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension && NODE_ENV === 'development' ? window.devToolsExtension() : f => f
  )
);

const user = localStorage.getItem('user');
const token = localStorage.getItem('token');
const profile = localStorage.getItem('userprofile');
if (user && token) {
  store.dispatch({
    type: CURRENT_USER,
    payload: {
      currentUser: JSON.parse(user)
    }
  });
  store.dispatch({
    type: VIEW_PROFILE,
    payload: JSON.parse(profile)
  });
}

export default store;
