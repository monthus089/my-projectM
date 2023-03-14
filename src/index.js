import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/Style/index.css';
import App from './App';
import AdminApp from './components/Admin/AdminApp';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdminApp/>
  </React.StrictMode>
);

reportWebVitals();
