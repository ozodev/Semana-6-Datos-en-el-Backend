import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = 'http://localhost:3000/api/v1/register';
  private loginUrl = 'http://localhost:3000/api/v1/login';

  constructor(private http: HttpClient) {}

  register(user: string, password: string): Observable<any> {
    return this.http.post(this.registerUrl, { user, password });
  }

  login(user: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, { user, password });
  }
}