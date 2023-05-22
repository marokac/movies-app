import { createReducer, on } from '@ngrx/store';
import { AuthenticateAction, AuthenticateActionError, AuthenticateActionSuccess } from './Auth.actions';


export const initialState = {
    auth: {},
};

export const AuthReducer = createReducer(
    initialState,
    on(AuthenticateAction, (state, action): any => ({
        ...state,
        auth: { ...action },
    })),
    on(AuthenticateActionSuccess, (state, success): any => ({
        ...state,
        ...success,
    })),
    on(AuthenticateActionError, (state, error): any => ({
        ...state,
        ...error,
    }))
);
