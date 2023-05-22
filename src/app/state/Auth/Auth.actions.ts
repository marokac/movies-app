

import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';
import { AuthActionTypes } from './auth.types';



export const GetAccessTokenActionSuccess = createAction(
    AuthActionTypes.LOAD_ACCESS_TOKEN_SUCCESS,
    props<{ success: any }>()
);

export const GetAccessTokenActionError = createAction(
    AuthActionTypes.LOAD_ACCESS_TOKEN_ERROR,
    props<{ error: any }>()
);

export const AuthenticateAction = createAction(
    AuthActionTypes.AUTHANTICATE,
    props<{ user: User }>()
    
);

export const AuthenticateActionSuccess = createAction(
    AuthActionTypes.AUTHANTICATE_SUCCESS,
    props<{ success: any }>()
);

export const AuthenticateActionError = createAction(
    AuthActionTypes.AUTHANTICATE_ERROR,
    props<{ error: any }>()
);


