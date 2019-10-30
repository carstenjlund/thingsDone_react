import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'


import Header from '../Header'
import Navigation from '../Navigation'
import Main from '../Main'
import Footer from '../Footer'

export default function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Main />
        <Footer />
      </div >
    </Router>
  );
}