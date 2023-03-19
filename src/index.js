import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/Style/index.css';
import App from './App';
import AdminApp from './components/Admin/AdminNavbar';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();
