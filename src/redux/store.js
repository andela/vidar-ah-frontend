import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const { NODE_ENV } = process.env;

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension && NODE_ENV === 'development' ? window.devToolsExtension() : f => f
  )
);

export default store;
