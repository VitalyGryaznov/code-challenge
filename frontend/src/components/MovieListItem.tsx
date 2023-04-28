import { AcUnitSharp, Star, StarBorder } from '@mui/icons-material';
import { Divider, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieType } from '../types';

type PropType = {
  movie: MovieType;
  favoriteMovies: string[];
  handleStarClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, movieName: string) => void;
};

const MovieListItem = (props: PropType) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate('/movie/' + props.movie.movieName.split(' ').join('_'));
      }}
      key={props.movie.movieName}>
      <ListItemButton>
        <ListItemIcon>
          <AcUnitSharp />
        </ListItemIcon>
        <ListItemText primary={props.movie.movieName}>{props.movie.movieName}</ListItemText>
        <ListItemIcon
          onClick={(e) => {
            props.handleStarClick(e, props.movie.movieName);
          }}>
          {props.favoriteMovies.includes(props.movie.movieName) ? <Star /> : <StarBorder />}
        </ListItemIcon>
      </ListItemButton>
      <Divider />
    </div>
  );
};

export default MovieListItem;
