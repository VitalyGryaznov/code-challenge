import axios from 'axios';
import { MovieType } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:8080' //TODO take if from env
});

const getMovies = (): Promise<MovieType[]> => api.get('/movie').then((res) => res.data);

const getMovie = (id: number): Promise<MovieType> =>
  api.get(`/movie/${id}`).then((res) => res.data);

const addMovie = (movie: MovieType): Promise<any> =>
  api
    .post('/movie', movie, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .then((res) => res.data);

export { getMovies, getMovie, addMovie };
