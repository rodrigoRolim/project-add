import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Colaborator } from './colaborator';
import { Observable } from 'rxjs/Observable';
import { HttpErrorHandlerService, HandleError } from '../../http-error-handler.service';
import { catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { MessageService } from '../../message.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
export interface ColaboratorInterface {
  name: string;
  email: string;
  phone: string;
  birthday: Date;
  workload: number;
  schooling: string;
}
@Injectable()
export class ColaboratorService {
  colaboratorsUrl = 'http://localhost:3000/v1/users';
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private handleError: HttpErrorHandlerService
  ) { }
  getColaborators(): Observable<Colaborator[]> {
    return this.http.get<Colaborator[]>(this.colaboratorsUrl);
  }
  getColaborator(id: number): Observable<Colaborator> {
    const url = `${this.colaboratorsUrl}/${id}`;
    return this.http.get<Colaborator>(url, httpOptions);
  }
  addColaborator(colaborator: ColaboratorInterface): Observable<Colaborator> {
    return this.http.post<Colaborator>(this.colaboratorsUrl, colaborator, httpOptions);
  }
  deleteColaborator(id: number): Observable<{}> {
    const url = `${this.colaboratorsUrl}/${id}`;
    return this.http.delete(url, httpOptions);
  }
  updateColaborator(colaborator: Colaborator): Observable<Colaborator> {
    const url = `${this.colaboratorsUrl}/${colaborator.id}`;
    return this.http.put<Colaborator>(this.colaboratorsUrl, colaborator, httpOptions);
  }
  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
  // /** Log a HeroService message with the MessageService */
  // private log(message: string) {
  //   this.messageService.add('HeroService: ' + message);
  // }
}
