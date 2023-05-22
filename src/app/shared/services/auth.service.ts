//https://api.themoviedb.org/3/authentication

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';




@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient ) {}
    
    public getAccessToken (): Observable<any>{
     
        return this.http
        .get(
            `${environment.API_URL}/authentication/token/new`
            ,
            {
                observe: 'response',
            }
        )
        .pipe(
            map((response: any) => {
                sessionStorage.setItem('request_token', response.body?.request_token);
                return response.body;
            })
        );
}

    public authenticate(user: User): Observable<any> {
             const request = {
                username: user.userName,
                password: user.password,
                request_token: sessionStorage.getItem('request_token'),
             }
            return this.http
            .post(
                `${environment.API_URL}/authentication/token/validate_with_login`
                ,
                request,
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







