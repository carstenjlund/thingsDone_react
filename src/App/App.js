import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}