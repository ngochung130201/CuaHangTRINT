import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeProductCommnent } from '../types/productComment';

@Injectable({
  providedIn: 'root'
})
export class ProductCommnentService {
  constructor(private http: HttpClient) { }
  private readonly baseUrl = 'https://localhost:7177/api/ProductComment';
  public AddProductComment(data: TypeProductCommnent): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`,data);
  }
  public getAllProductComment(productId : string): Observable<any> {
    
    return this.http.get<TypeProductCommnent[]>(`${this.baseUrl}/ProductCommentId/${productId}`)
  }

}
