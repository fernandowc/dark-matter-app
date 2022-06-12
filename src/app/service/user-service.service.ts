import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url = 'http://localhost:8080/v1/api/user';

  constructor(private http: HttpClient, private router: Router) { }

  getAllUsers(): Observable<User[]> {
      
    return this.http.get<User[]>(`${ this.url}/lista`).pipe(
      catchError(e => {
        if(e.status != 401 && e.error.mensaje)
        {
          this.router.navigate(['/listauser']);
          console.error(e.error.mensaje)
        }

        return throwError(e);
      })
    );;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/v1/api/user/lista');
  }

  

}