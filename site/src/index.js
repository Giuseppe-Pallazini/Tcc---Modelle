import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ToastContainer } from 'react-toastify';
// import App from './App';
import  Routes  from './routes.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <ToastContainer />
        <Routes />
  </React.StrictMode>
);
