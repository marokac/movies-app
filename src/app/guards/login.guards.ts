import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Store } from '@ngrx/store';
import { loadAuthSelector } from '../state/Auth/auth.selector';


@Injectable({
    providedIn: 'root',
})
export class LoginGuard implements CanActivate {
    loggedIn = false
    constructor(private store: Store<any>) {
        this.store.select(loadAuthSelector).subscribe(data=>{
            if(data){
              this.loggedIn = data?.success;
            }
      })
    }

    canActivate(): boolean {
        if (!this.loggedIn) {
            return false;
        }
        return true;
    }
}
