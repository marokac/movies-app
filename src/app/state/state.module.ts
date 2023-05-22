import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../../environments/environment';
import { AuthEffect } from './Auth/auth.effects';
import { AuthReducer } from './Auth/auth.reducer';


export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({
        keys: ['auth'],
        rehydrate: true,
        storage: sessionStorage,
        checkStorageAvailability: false,
    })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
    imports: [
        StoreModule.forRoot(
            {
                auth: AuthReducer,
               
         
            },
            {
                metaReducers,
            }
        ),
        EffectsModule.forRoot([
            AuthEffect
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
