import React from 'react';
import { AddMoviePage } from '../pages/AddMoviePage';
import { MovieDetailsPage } from '../pages/MovieDetailsPage';
import { MoviesPage } from '../pages/MoviesPage';

export type RouteType = {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
};

export enum Routes {
  HOME = '/',
  MOVIES = '/movie', // not removing it because expect we need to keep existing urls
  ADD_MOVIE = '/add-movie',
  MOVIE_DETAILS = '/movie/:title'
}

export const routes: RouteType[] = [
  { path: Routes.HOME, exact: true, component: MoviesPage },
  { path: Routes.MOVIES, exact: true, component: MoviesPage },
  { path: Routes.ADD_MOVIE, exact: true, component: AddMoviePage },
  { path: Routes.MOVIE_DETAILS, exact: true, component: MovieDetailsPage }
];
