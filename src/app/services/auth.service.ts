import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment'

export interface AuthorData {
  id: string;
  email: string;
  name: string;
  lastname: string;
  about: string;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:5000/author/";
  imageUrl?: string;

  constructor(private http: HttpClient, private router: Router) { }


  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }



  logout(): void {
    localStorage.removeItem('token');  // Clear the token from localStorage
    this.router.navigate(['/home']);   // Navigate to home page after logout
  }


  login(email: string, password: string): Observable<any> {
    return this.http.post<{ token: string }>(`${environment.baseApi}adminLogin/`, { email, password }).pipe(
      tap(response => {
        if (response?.token) {
          console.log(response.token);
          localStorage.setItem('token', response.token);
          // this.router.navigate(['/dashboard']);

        } else {
          console.error('No token received in the response.');
        }
      }),
      catchError(error => this.handleError('Login failed', error))
    );
  }

  // getAuthorDataFromToken(token?: any): AuthorData | null {
  //   token = localStorage.getItem('token');
  //   if (!token) return null;

  //   const payload = token.split('.')[1];
  //   if (!payload) return null;

  //   const decodedPayload = JSON.parse(window.atob(payload));
  //   return decodedPayload; // Ensure this contains an `id` field
  // }




  private handleError(message: string, error: any): Observable<never> {
    console.error(`${message}:`, error);
    return throwError(error);
  }

  // deleteArticle(articleId: string): Observable<any> {
  //   return this.http.delete(`${this.url}article/${articleId}`);
  // }
}
