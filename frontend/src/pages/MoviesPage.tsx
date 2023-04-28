import React, { useState } from 'react';
import List from '@mui/material/List';
import { Add } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { Alert, CircularProgress, Fab } from '@mui/material';
import { Filter } from '../components/Filter';
import { filterByDate } from '../utils/filterByDate';
import { useSearchBarContext } from '../hooks/useSearchBarContext';
import { useQuery } from '@tanstack/react-query';
import { getMovies } from '../restApi/movieApi';
import { MovieType } from '../types';
import MovieListItem from '../components/MovieListItem';

export const MoviesPage = () => {
  const navigate = useNavigate();
  const [favoriteMovies, setFavoriteMovies] = React.useState<string[]>([]);

  const [filterStartDate, setFilterStartDate] = useState<string>('');
  const [filterEndDate, setFilterEndDate] = useState<string>('');

  const { query } = useSearchBarContext();
  const { isLoading, data, isError } = useQuery({
    queryKey: ['getMovies'],
    queryFn: getMovies
  });

  const filterBySearchQuery = (data: MovieType[]) => {
    const queryStringForFiltering = query ? query.trim().toLocaleLowerCase() : '';
    if (!queryStringForFiltering.length || !data.length) {
      return data;
    } else {
      return data.filter((movie) =>
        movie.movieName.toLocaleLowerCase().includes(queryStringForFiltering)
      );
    }
  };

  const applyAllFilters = (data: MovieType[]) => {
    return filterByDate(filterBySearchQuery(data), filterStartDate, filterEndDate);
  };

  const handleStarClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, movieName: string) => {
    e.stopPropagation();
    if (favoriteMovies.includes(movieName)) {
      setFavoriteMovies(favoriteMovies.filter((favorite) => favorite !== movieName));
    } else {
      setFavoriteMovies([...favoriteMovies, movieName]);
    }
  };

  const onStartChangeEventHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilterStartDate(e.currentTarget.value);
  };

  const onEndChangeEventHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilterEndDate(e.currentTarget.value);
  };

  const MoviesList = () => {
    //also could be moved to a separate component
    if (isLoading) {
      // TODO. Style it properly and move to a separate component
      return (
        <div
          style={{
            overflow: 'auto',
            textAlign: 'center',
            marginTop: '20px'
          }}>
          <CircularProgress />
        </div>
      );
    }
    if (isError) {
      // TODO. Style it properly and move to a separate component
      return <Alert severity="error">Something went wrong. Please, try again later</Alert>;
    }

    return (
      <List>
        {applyAllFilters(data).map((movie) => {
          return (
            <MovieListItem
              key={movie.movieName}
              movie={movie}
              favoriteMovies={favoriteMovies}
              handleStarClick={handleStarClick}
            />
          );
        })}
      </List>
    );
  };

  return (
    <div
      style={{
        height: '700px',
        overflow: 'auto',
        boxShadow: '-60px 0px 100px -90px #000000, 60px 0px 100px -90px #000000'
      }}>
      <div>
        <Filter
          startDateValue={filterStartDate}
          endDateValue={filterEndDate}
          onStartChange={onStartChangeEventHandler}
          onEndChange={onEndChangeEventHandler}
        />
      </div>
      <MoviesList />

      <Fab
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20
        }}
        color="primary"
        onClick={() => navigate('/add-movie')}>
        <Add />
      </Fab>
    </div>
  );
};
