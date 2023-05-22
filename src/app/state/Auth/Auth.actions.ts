

import { createAction, props } from '@ngrx/store';
import { AuthActionTypes } from './auth.types';

export const AuthenticateAction = createAction(
    AuthActionTypes.AUTHANTICATE,
);

export const AuthenticateActionSuccess = createAction(
    AuthActionTypes.AUTHANTICATE_SUCCESS,
    props<{ payload: any }>()
);

export const AuthenticateActionError = createAction(
    AuthActionTypes.AUTHANTICATE_ERROR,
    props<{ payload: any }>()
);


