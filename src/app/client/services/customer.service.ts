import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer } from '../types/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = environment.apiUrl+'/Customer';

  public getCustomer(email?:string): Observable<Customer> {
    return this.http.get<Customer>(`${this.baseUrl}/${email}`);
  }
  public updateCustomer(id?:string,data?:any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`,data);
  }
}
