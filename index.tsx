import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { store } from './components/state/store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline />
        <App />
      </SnackbarProvider>
    </Provider>
  </StrictMode>
);
