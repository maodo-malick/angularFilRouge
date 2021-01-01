import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {GetAuthService} from './services/get-auth.service';

@Injectable()
export class HelperInterceptor implements HttpInterceptor {

  constructor( private auth: GetAuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // return next.handle(request);
    const token = this.auth.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }
    return next.handle(request);
  }
}
export  const ErrorHelperInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: HelperInterceptor,
  multi: true
};
