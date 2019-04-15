import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Index';
import './assets/default.scss';

const App = () => (
  <Router>
    <Routes />
  </Router>
);

export default App;
