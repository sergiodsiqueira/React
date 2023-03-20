import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <Router />
    </SnackbarProvider>
  </React.StrictMode>
);