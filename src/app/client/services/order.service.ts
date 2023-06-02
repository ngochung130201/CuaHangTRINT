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
  private readonly baseUrl = environment.apiUrl+'/Orders';

  public addOrder(CustomerId:string,data : TypeAddOrder[]): Observable<TypeAddOrder> {
    return this.http.post<TypeAddOrder>(`${this.baseUrl}?CustomerId=${CustomerId}`,data);
  }
}
