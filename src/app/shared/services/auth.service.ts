//https://api.themoviedb.org/3/authentication

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';




@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient ) {}
    
    
    public authenticate(): Observable<any> {
            return this.http
            .get(
                `${environment.API_URL}/authentication`
                ,
                {
                    observe: 'response',
                }
            )
            .pipe(
                map((response: any) => {
                    return response.body;
                })
            );
    }

}

