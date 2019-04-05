import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './app';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/default.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
