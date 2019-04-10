import '@babel/polyfill';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { ToastContainer, Flip } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/default.scss';
import App from './app';
import store from './redux/store';


render(
  <Provider store={store}>
    <App />
    <ToastContainer
      transition={Flip}
      position="top-right"
      autoClose={5000}
    />
  </Provider>,
  document.getElementById('app')
);
