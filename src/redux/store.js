import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { CURRENT_USER } from './actions/actionTypes';
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

if (user) {
  store.dispatch({
    type: CURRENT_USER,
    payload: {
      currentUser: JSON.parse(user)
    }
  });
}

export default store;
