import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/scss/default.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Index';

const App = () => (
  <Router>
    <Routes />
  </Router>
);

export default App;
