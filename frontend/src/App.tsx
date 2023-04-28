import { CssBaseline, Container, Box } from '@mui/material';
import { Search } from '@mui/icons-material';
import React from 'react';
import { Navbar } from './components/Navbar';
import { SearchBar } from './components/SearchBar';
import { useSearchBarContext } from './hooks/useSearchBarContext';
import AppRouter from './components/AppRouter';

export function App() {
  const { setShow, show } = useSearchBarContext();
  return (
    <div>
      <CssBaseline />
      <div
        style={{
          height: '80px',
          background: '#0532FF',
          padding: '1rem',
          placeSelf: 'center center',
          boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
        }}>
        <Navbar
          items={[
            { title: 'Movies' },
            { to: '/movie', label: 'MOVIES' },
            {
              icon: <Search />,
              onClick: () => setShow((show) => !show) as unknown as VoidFunction
            }
          ]}
        />
      </div>
      {show && <SearchBar />}
      <Container>
        <Box mt={4} mb={8}>
          <AppRouter />
        </Box>
      </Container>
    </div>
  );
}
