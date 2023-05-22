import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class MoviesService {
    constructor(private http: HttpClient) { }
    public loadMovies(): Observable<any> {
        return this.http
            .get(
                `${environment.API_URL}/account/8450180/lists?page=10`
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


    public loadSingleMovie(id: string): Observable<any> {
        return this.http
            .get(
                `${environment.API_URL}/account?id=${id}`
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

    public setFavourateMovie(id: string): Observable<any> {
        return this.http
            .get(
                `${environment.API_URL}/account?id=${id}`
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