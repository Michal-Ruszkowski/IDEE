import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from './Footer'
import Header from './Header'
import Main from './Main'

import '../styles/App.min.css';

function App() {
  return (
    <Router>
    <Header/>
    <Main/>
    <Footer/>
    </Router>
  );
}

export default App;