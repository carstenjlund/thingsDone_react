import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function App() {
  const APPTITLE = 'Things I have done today'
  const APPNAME = 'Things Done Application'
  return (
    <BrowserRouter>
      <Header apptitle={APPTITLE} />
      <Navigation />
      <Main />
      <Footer appname={APPNAME} />
    </BrowserRouter>
  );
}