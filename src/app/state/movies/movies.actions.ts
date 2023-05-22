

import { createAction, props } from '@ngrx/store';
import { MoviesActionTypes } from './movies.types';

export const LoadAllMoviesAction = createAction(
    MoviesActionTypes.LOAD_ALL_MOVIES,
);

export const LoadAllMoviesActionSuccess = createAction(
    MoviesActionTypes.LOAD_ALL_MOVIES_SUCCESS,
    props<{ payload: any }>()
);

export const LoadAllMoviesActionError = createAction(
    MoviesActionTypes.LOAD_ALL_MOVIES_ERROR,
    props<{ payload: any }>()
);




export const LoadSingleMovieAction = createAction(
    MoviesActionTypes.LOAD_SINGLE_MOVIE,
);

export const LoadSingleMovieActionSuccess = createAction(
    MoviesActionTypes.LOAD_SINGLE_MOVIE_SUCCESS,
    props<{ payload: any }>()
);

export const LoadSingleMovieActionError = createAction(
    MoviesActionTypes.LOAD_SINGLE_MOVIE_ERROR,
    props<{ payload: any }>()
);


export const SetFavourateMovieAction = createAction(
    MoviesActionTypes.SET_FAVOURATE_MOVIE,
);

export const SetFavourateMovieActionSuccess = createAction(
    MoviesActionTypes.SET_FAVOURATE_MOVIE_SUCCESS,
    props<{ payload: any }>()
);

export const SetFavourateMovieActionError = createAction(
    MoviesActionTypes.SET_FAVOURATE_MOVIE_ERROR,
    props<{ payload: any }>()
);


