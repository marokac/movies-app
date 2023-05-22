import { createReducer, on } from '@ngrx/store';
import { AuthenticateAction, AuthenticateActionError, AuthenticateActionSuccess, GetAccessTokenActionError, GetAccessTokenActionSuccess } from './Auth.actions';


export const initialState = {
    success: null,
    error: null
};

export const tokeninitialState = {
    success: null,
    error: null
};

export const AuthReducer = createReducer(
    initialState,
    on(AuthenticateActionSuccess, (state, {success}): any => ({
        ...state,
        success:{...success} ,
    })),
    on(AuthenticateActionError, (state, {error}): any => ({
        ...state,
        error:{...error} ,
    }))
);


export const TokenReducer = createReducer(
    tokeninitialState,
    on(GetAccessTokenActionSuccess, (state, {success}): any => ({
        ...state,
        success:{...success} ,
    })),
    on(GetAccessTokenActionError, (state, {error}): any => ({
        ...state,
        error:{...error} ,
    }))
);