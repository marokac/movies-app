import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../../environments/environment';
import { AuthEffect } from './Auth/auth.effects';
import { AuthReducer, TokenReducer } from './Auth/auth.reducer';
import { MoviesEffect } from './movies/movies.effect';
import { MovieReducer } from './movies/movies.reducer';


export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({
        keys: ['token','auth', 'movies'],
        rehydrate: true,
        storage: sessionStorage,
        checkStorageAvailability: false,
    })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
    imports: [
        StoreModule.forRoot(
            {   token: TokenReducer,
                auth: AuthReducer,
                movies: MovieReducer
         
            },
            {
                metaReducers,
            }
        ),
        EffectsModule.forRoot([
            AuthEffect,
            MoviesEffect
        ]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
            features: {
                pause: false,
                lock: true,
                persist: true,
            },
        }),
    ],
    declarations: [],
    providers: [],
    exports: [],
})
export class StateModule {
    static forRoot() {
        return {
            ngModule: StateModule,
        };
    }
}
