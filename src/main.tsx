import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element not found. Ensure index.html contains <div id="root"></div>');
}

const root = createRoot(container);

const initApp = () => {
  console.info('[System] Inventory Management System starting...');
  console.info('[System] React version:', React.version);
  console.info('[System] Environment:', import.meta.env.MODE);
};

const renderApp = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
  console.info('[System] Application mounted successfully');
};

window.addEventListener('error', (event) => {
  console.error('[Error] Uncaught error:', event.error?.message || event.message);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('[Error] Unhandled promise rejection:', event.reason);
});

initApp();
renderApp();