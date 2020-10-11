import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any> {
    // Params desde una variable.
    let params = new HttpParams().append('page', '2');
    params = params.append('nombre', 'David Carmona');

    return this.http
      .get('https://reqres.in/api/user', {params})
      .pipe(
        map((response: any) => response.data),
        // catchError( this.manejarError )
      );
  }

}
