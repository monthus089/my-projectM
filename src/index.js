import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/Style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './components/Auth/AuthProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
< Router>
      <App/>
  </ Router>
  </AuthProvider>
);

reportWebVitals();
