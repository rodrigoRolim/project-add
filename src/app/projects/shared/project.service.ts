import { catchError, map, retry, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpErrorHandlerService } from '../../http-error-handler.service';
import { MessageService } from '../../message.service';
import { Project } from './project';
import { Colaborator } from '../../colaborators/shared/colaborator';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class ProjectService {
  projectsUrl = 'http://localhost:3000/v1/projects';
  constructor(
    private http: HttpClient,
    private handleError: HttpErrorHandlerService
  ) { }
  getColaborators(): Observable<Colaborator[]> {
    return this.http.get<Colaborator[]>('http://localhost:3000/v1/users', httpOptions)
    .pipe(
      retry(3),
      catchError(this.handleError.handleError<Colaborator[]>('getColaborators'))
    );
  }
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl, httpOptions)
    .pipe(
      retry(3),
      catchError(this.handleError.handleError<Project[]>('getProjects'))
    );
  }
  getProject(id: number): Observable<Project> {
    const url = `${this.projectsUrl}/${id}`;
    return this.http.get<Project>(url, httpOptions)
    .pipe(
      retry(3),
      catchError(this.handleError.handleError<Project>('getProject'))
    );
  }
  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.projectsUrl, project, httpOptions)
    .pipe(
      retry(3),
      catchError(this.handleError.handleError<Project>('addProject')),
    );
  }
  updateProject(project: Project): Observable<Project> {
    const url = `${this.projectsUrl}/${project._id}`;
    return this.http.put<Project>(url, project, httpOptions)
    .pipe(
      retry(3),
      catchError(this.handleError.handleError<Project>('updateProject'))
    );
  }
  deleteProject(project: Project): Observable<{}> {
    const url = `${this.projectsUrl}/${project._id}`;
    return this.http.delete(url, httpOptions)
    .pipe(
      retry(3),
      catchError(this.handleError.handleError<{}>('deleteProject'))
    );
  }
}
