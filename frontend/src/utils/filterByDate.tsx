import { MovieType } from '../types';

export const filterByDate = (
  movies: MovieType[],
  filterStartDate: string,
  filterEndDate: string
): any[] => {
  if (!movies) return [];
  if (!filterStartDate && !filterEndDate) return movies;

  return movies.filter((movie) => {
    return (
      (!filterStartDate ||
        new Date(filterStartDate) <= new Date(movie.releaseDate.split('-').reverse().join('-'))) &&
      (!filterEndDate ||
        new Date(filterEndDate) >= new Date(movie.releaseDate.split('-').reverse().join('-')))
    );
  });
};
