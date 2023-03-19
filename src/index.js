import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/Style/index.css';
import App from './App';
import AdminApp from './components/Admin/AdminNavbar';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < Router>
    <App/>
  </ Router>
);

reportWebVitals();
