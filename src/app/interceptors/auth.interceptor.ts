import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (
            !request ||
            !request.url
        ) {
            return next.handle(request);
        }

        request = request.clone({
            setHeaders: {
                'Authorization': `Bearer ${environment.AUTH_TOKEN_KEY}`,
            },
        });

        return next.handle(request);
    }
}

