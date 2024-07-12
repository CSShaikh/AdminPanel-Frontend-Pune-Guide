import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';

export interface Admin{
  id: number;
  userName: string;
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
  export class AuthService {
    private baseUrl = 'http://localhost:8083'; // Adjust the port as necessary

    constructor(private http: HttpClient) {}
  
    login(admin: { userName: string; password: string; email: string }): Observable<boolean> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<any>(`${this.baseUrl}/admin/login`, admin, { headers }).pipe(
        map(response => {
          const token = response.token;
          if (token) {
            localStorage.setItem('currentUser', JSON.stringify({ admin, token }));
            return true;
          } else {
            return false;
          }
        }),
        catchError(error => {
          console.error('Error:', error);
          return throwError('Invalid credentials'); // Customize error handling as needed
        })
      );
    }
  
  logout() {
    localStorage.removeItem('token');
  }
}

  /*
  private baseUrl = 'http://localhost:8083/admin'; // Ensure this is the correct URL
  constructor(private http: HttpClient) {}

  login(adminName: string,email:string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { adminName, email, password });
  }/*
  /*
  login(admin:Admin):Observable<object>{
    return this.http.post(`${this.baseUrl}/admin/login`, admin);
  }*/
  
  /*
  login(admin:Admin): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<{ token: string }>(this.baseUrl, { admin }, { headers })
      .pipe(
        map(response => {
          localStorage.setItem('token', response.token);
          return true;
        }),
        catchError(() => of(false))
      );
  }*/
/*
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  */
