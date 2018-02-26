import { Colaborator } from './colaborator';
import { HttpErrorHandlerService, HandleError } from '../../http-error-handler.service';
import { MessageService } from '../../message.service';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class ColaboratorService {
  colaboratorsUrl = 'http://localhost:3000/v1/users';
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private handleError: HttpErrorHandlerService
  ) { }
  getColaborators(): Observable<Colaborator[]> {
    return this.http.get<Colaborator[]>(this.colaboratorsUrl, httpOptions)
    .pipe(
      retry(3),
      catchError(this.handleError.handleError<Colaborator[]>('getColaborators'))
    );
  }
  getColaborator(id: number): Observable<Colaborator> {
    const url = `${this.colaboratorsUrl}/${id}`;
    return this.http.get<Colaborator>(url, httpOptions)
    .pipe(
      retry(3),
      catchError(this.handleError.handleError<Colaborator>('getColaborator'))
    );
  }
  addColaborator(colaborator: Colaborator): Observable<Colaborator> {
    return this.http.post<Colaborator>(this.colaboratorsUrl, colaborator, httpOptions)
    .pipe(
      retry(3),
      catchError(this.handleError.handleError<Colaborator>('addColaborator'))
    );
  }
  deleteColaborator(colaborator: Colaborator): Observable<{}> {
    const url = `${this.colaboratorsUrl}/${colaborator._id}`;
    return this.http.delete(url, httpOptions)
    .pipe(
      retry(3),
      catchError(this.handleError.handleError<{}>('deleteColaborator'))
    );
  }
  updateColaborator(colaborator: Colaborator): Observable<Colaborator> {
    const url = `${this.colaboratorsUrl}/${colaborator._id}`;
    return this.http.put<Colaborator>(this.colaboratorsUrl, colaborator, httpOptions)
    .pipe(
      retry(3),
      catchError(this.handleError.handleError<Colaborator>('updateColaborator'))
    );
  }
}
