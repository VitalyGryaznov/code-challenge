import { Alert, CircularProgress } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Card } from '../components/Card';
import MovieButton from '../components/MovieButton';
import { addMovie } from '../restApi/movieApi';

export const AddMoviePage = () => {
  const [movieName, setMovieName] = useState<string>('');
  const [releaseDate, setReleaseDate] = useState<string>('');
  const [successMessageIsVisible, setSuccessMessageIsVisible] = useState(false);

  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation(addMovie, {
    onSuccess: () => {
      setSuccessMessageIsVisible(true);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['getMovies']);
    }
  });

  return (
    <>
      {!!isLoading && <CircularProgress />}
      {successMessageIsVisible && <Alert severity="success">Movie was added successfully!</Alert>}
      {!!isError && <Alert severity="error">Something went wrong. Please, try again later</Alert>}
      <Card headerText="Add movie" handleClickOnCard={() => setSuccessMessageIsVisible(false)}>
        <div
          style={{
            fontSize: '3.75rem',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 300,
            lineHeight: 1.2,
            letterSpacing: '-0.00833em'
          }}></div>
        <TextField
          value={movieName}
          fullWidth
          style={{ marginBottom: '1rem' }}
          label="Movie Name"
          onChange={({ target }) => setMovieName(target.value)}
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          fullWidth
          value={releaseDate}
          style={{ marginBottom: '1rem' }}
          label="Date"
          onChange={({ target }) => setReleaseDate(target.value)}
          type="date"
        />
        <div style={{ paddingBottom: '50px' }}></div>
        <div
          style={{
            float: 'right',
            marginTop: '-50px'
          }}>
          <MovieButton
            primary
            onClick={() => {
              mutate({ movieName, releaseDate: releaseDate.split('-').reverse().join('-') });
            }}
            label={`Submit ${movieName}`}
          />
        </div>
      </Card>
    </>
  );
};
