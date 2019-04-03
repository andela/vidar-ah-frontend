import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './assets/scss/test.scss';

const title = 'Authors Haven';

const App = () => (
  <Provider store={store}>
    <div>
      {title}
    </div>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();
