import { Close, Delete } from '@mui/icons-material';
import { Card, IconButton } from '@mui/material';
import React from 'react';
import { useSearchBarContext } from '../hooks/useSearchBarContext';

export const SearchBar = () => {
  const { query, setQuery, show, setShow } = useSearchBarContext();
  if (!show) return undefined;

  return (
    <Card>
      <form
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 40px 40px',
          gridGap: '1rem',
          padding: '2rem'
        }}>
        <input
          style={{ padding: '1rem' }}
          placeholder="search"
          type="text"
          className="MuiInputBase-input"
          onChange={(e: any) => setQuery(e.target.value)}
          value={query}
        />
        <IconButton
          aria-label="clear"
          style={{ borderRadius: 0 }}
          onClick={() => {
            setQuery('');
          }}>
          <Delete />
        </IconButton>
        <IconButton
          aria-label="close"
          style={{ borderRadius: 0 }}
          onClick={() => {
            setShow(false);
          }}>
          <Close />
        </IconButton>
      </form>
    </Card>
  );
};
