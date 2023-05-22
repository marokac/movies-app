import { createReducer, on } from '@ngrx/store';
import { LoadAllMoviesActionError, LoadAllMoviesActionSuccess, LoadSingleMovieActionError, LoadSingleMovieActionSuccess, SetFavourateMovieActionError, SetFavourateMovieActionSuccess } from './movies.actions';



export const initialMovieState = {
    movies: null,
    singleMovie : null,
    favourateMovie: null
};

export const MovieReducer = createReducer(
    initialMovieState,
    on(LoadAllMoviesActionSuccess, (state, action): any => ({
        ...state,
        movies: { ...action.payload },
    })),
    on(LoadAllMoviesActionError, (state, action): any => ({
        ...state,
        movies: { ...action.payload },
    })),
    on(LoadSingleMovieActionSuccess, (state, action): any => ({
        ...state,
        singleMovie: { ...action.payload },
    })),
    on(LoadSingleMovieActionError, (state, action): any => ({
        ...state,
        singleMovie: { ...action.payload },
    })),
    on(SetFavourateMovieActionSuccess, (state, action): any => ({
        ...state,
        favourateMovie: { ...action.payload },
    })),
    on(SetFavourateMovieActionError, (state, action): any => ({
        ...state,
        favourateMovie: { ...action.payload },
    }))
);
