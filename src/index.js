import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './index.css';
import App from './App';
import RandomQuote from './pages/RandomQuote';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/randomQuote" element={<RandomQuote />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);
