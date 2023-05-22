import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AuthActionTypes } from './auth.types';
import { AuthenticateActionError, AuthenticateActionSuccess ,AuthenticateAction, GetAccessTokenActionSuccess, GetAccessTokenActionError} from './Auth.actions';

@Injectable()
export class AuthEffect {

    tokenEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActionTypes.INIT_EFFECTS),
            mergeMap(() => {
                return this.authService.getAccessToken().pipe(
                    map(response => {
                        return GetAccessTokenActionSuccess({success: response});
                    }),
                    catchError(error => {
                        return of(GetAccessTokenActionError({error: error}));
                    })
                );
            })
        )
    );

    AuthenticateEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActionTypes.AUTHANTICATE),
            mergeMap((action) => {
                return this.authService.authenticate(action['user']).pipe(
                    map(response => {
                        return AuthenticateActionSuccess({success: response});
                    }),
                    catchError(error => {
                        return of(AuthenticateActionError({error: error}));
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
