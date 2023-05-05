import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import './fonts.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/DamarAgrotrade">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
