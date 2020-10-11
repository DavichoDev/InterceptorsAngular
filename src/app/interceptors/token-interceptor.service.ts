import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'token-usuario': 'FSDFSDSGSDGSDFGSDFG',
    });

    // Se debe clonar la request antes de ser manipulada.
    const reqClone = req.clone({
      headers
    });

    return next.handle( reqClone ).pipe(
      catchError( this.manejarError )
    );
  }

  manejarError( error: HttpErrorResponse ) {
    console.log('Algo sucedió mal.');
    console.log('Registrado en el logFile');
    console.warn(error);

    return throwError('Error Personalizado');
  }

}
