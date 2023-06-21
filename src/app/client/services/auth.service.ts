import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { TypeLogin, TypeRegister } from '../types/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = environment.apiUrl + '/Account';
  private tokenKey: string = 'auth_token';
  private isLoggedInVar: boolean = false;
  public Login(data: TypeLogin): Observable<string> {
    var token = this.http.post<string>(`${this.baseUrl}/SignIn`, data);

    return token;

  }

  public Register(data: TypeRegister | null | undefined): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/SignUp`, data);
  }
  hanldeLogin(token: string, isLoggedInVar: boolean) {
    this.setToken(token);
    this.isLoggedInVar = isLoggedInVar;
  }
  public logout() {
    // your code to log out the user
    // for example, you can clear the token from localStorage and set isLoggedInVar to false
    this.removeToken();
    this.isLoggedInVar = false;
  }
  getDataUser(): string {
    return localStorage.getItem("tokenUser") || '';
  }

  isLoggedIn(): boolean {
    return this.isLoggedInVar;
  }
  hasValidToken(): boolean {
    const token = this.getToken();
    return !!token; // return true if the token exists, false otherwise
  }

  setToken(token: string) {
    // your code to set the token in localStorage
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string {
    // your code to get the token from localStorage
    return localStorage.getItem(this.tokenKey) || '';
  }

  removeToken() {
    // your code to remove the token from localStorage
    localStorage.removeItem(this.tokenKey);
  }
}
