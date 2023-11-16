import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PageRouter from './router/PageRouter';
// import { UserContextProvider } from '../src/context/UserContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PageRouter/>
  </React.StrictMode>
);

