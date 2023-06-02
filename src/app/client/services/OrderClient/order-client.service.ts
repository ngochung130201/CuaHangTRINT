import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderClientService {
  private readonly baseUrl = 'https://localhost:7164/api/Products';
  constructor(private http: HttpClient) { }
  public createOrder(data: any): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}`, data);
  }
}
