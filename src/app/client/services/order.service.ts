import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { TypeAddOrder } from '../types/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = environment.apiUrl + '/Orders';

  public addOrder(CustomerId: string, data: TypeAddOrder[]): Observable<TypeAddOrder> {
    return this.http.post<TypeAddOrder>(`${this.baseUrl}?CustomerId=${CustomerId}`, data);
  }
  // https://localhost:7177/api/Orders/history_order?phone=0123456789
  public getHistoryOrder(phone?: string): Observable<any> {
    return this.http.get<TypeAddOrder[]>(`${this.baseUrl}/history_order?phone=${phone}`);
  }
}
