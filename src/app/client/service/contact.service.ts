import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = "https://localhost:7177/api/Contact";

  public addContact(body: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, body);
  }
}
