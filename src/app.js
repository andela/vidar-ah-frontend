import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Index';
import Footer from './components/footer/Footer';


const App = () => (
  <Router>
    <Routes />
    <Footer />
  </Router>
);

export default App;
