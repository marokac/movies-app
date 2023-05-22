import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AuthActionTypes } from './auth.types';
import { AuthenticateActionError, AuthenticateActionSuccess } from './Auth.actions';

@Injectable()
export class AuthEffect {
    createUserEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActionTypes.AUTHANTICATE),
            mergeMap(() => {
                return this.authService.authenticate().pipe(
                    map(response => {
                        return AuthenticateActionSuccess(response);
                    }),
                    catchError(error => {
                        return of(AuthenticateActionError(error));
                    })
                );
            })
        )
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
    ) {}
}
