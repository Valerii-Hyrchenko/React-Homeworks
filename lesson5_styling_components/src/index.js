import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CardsDataProvider } from './context/CardsDataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardsDataProvider>
      <App />
    </CardsDataProvider>
  </React.StrictMode>
);