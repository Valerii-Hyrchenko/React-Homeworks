import React from 'react';
import ReactDOM from 'react-dom/client';
import AppTask1 from './Task1-2/Task1-2';
import AppTask3 from './Task3/Task3';
import { DataProviderWrap } from './Task1-2/DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProviderWrap>
      <AppTask1 />
    </DataProviderWrap>
    <AppTask3 />
  </React.StrictMode>
);