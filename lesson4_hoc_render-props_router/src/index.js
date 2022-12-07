import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterApp } from './RouterApp';
import { BrowserRouter as Router } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <RouterApp />
    </Router>
  </React.StrictMode>
);

