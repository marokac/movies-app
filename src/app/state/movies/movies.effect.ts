import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { LoadAllMoviesActionError, LoadAllMoviesActionSuccess, LoadSingleMovieActionError, LoadSingleMovieActionSuccess, SetFavourateMovieActionError, SetFavourateMovieActionSuccess } from './movies.actions';
import { MoviesActionTypes } from './movies.types';



@Injectable()
export class MoviesEffect {
    LoadMoviesEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MoviesActionTypes.LOAD_ALL_MOVIES),
            mergeMap(() => {
                return this.moviesService.loadMovies().pipe(
                    map(response => {
                        return LoadAllMoviesActionSuccess({payload: response});
                    }),
                    catchError(error => {
                        return of(LoadAllMoviesActionError({payload: error}));
                    })
                );
            })
        )
    );

    LoadSingleEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MoviesActionTypes.LOAD_SINGLE_MOVIE),
            mergeMap(() => {
                return this.moviesService.loadSingleMovie('').pipe(
                    map(response => {
                        return LoadSingleMovieActionSuccess(response);
                    }),
                    catchError(error => {
                        return of(LoadSingleMovieActionError(error));
                    })
                );
            })
        )
    );

    setFavourateEffect$ = createEffect(() =>
    this.actions$.pipe(
        ofType(MoviesActionTypes.SET_FAVOURATE_MOVIE),
        mergeMap(() => {
            return this.moviesService.setFavourateMovie('').pipe(
                map(response => {
                    return SetFavourateMovieActionSuccess(response);
                }),
                catchError(error => {
                    return of(SetFavourateMovieActionError(error));
                })
            );
        })
    )
);

    constructor(
        private actions$: Actions,
        private moviesService: MoviesService,
    ) {}
}
