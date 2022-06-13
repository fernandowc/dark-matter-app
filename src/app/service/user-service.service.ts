import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url: string = 'http://localhost:8080/v1/api/user';
  private urlBase: string = environment.baseUrlUser;

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