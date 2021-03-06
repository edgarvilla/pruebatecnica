import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs'; 
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { FormularioPrueba } from '../models/formulario-prueba';

@Injectable({
  providedIn: 'root'
})
export class ListDataService {

 
  private REST_API_SERVER = "http://192.168.0.107:8004/posts";
  

constructor(private httpClient: HttpClient) {}

handleError(error: HttpErrorResponse) {
  let errorMessage = 'Unknown error!';
  if (error.error instanceof ErrorEvent) {
    // Client-side errors
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // Server-side errors
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}

public sendGetRequest(): Observable<FormularioPrueba[]>{

  return this.httpClient.get<FormularioPrueba[]>(this.REST_API_SERVER).pipe(retry(3), catchError(this.handleError));
}


}
