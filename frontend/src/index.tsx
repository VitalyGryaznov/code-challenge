import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { SearchBarContextProvider } from './context/SearchBarContext';

const container = document.getElementById('app');
const root = createRoot(container);
const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    primary: {
      main: '#0532FF'
    },
    secondary: {
      main: '#00bfa5'
    }
  }
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SearchBarContextProvider>
        <BrowserRouter>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </StyledEngineProvider>
        </BrowserRouter>
      </SearchBarContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
