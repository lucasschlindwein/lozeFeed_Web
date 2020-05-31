import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes.js';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />clear
      
    </BrowserRouter>
  );
}

export default App;
