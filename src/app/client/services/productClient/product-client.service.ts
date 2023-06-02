import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeProducts } from '../../types/product';


@Injectable({
  providedIn: 'root'
})
export class ProductClientService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = 'https://localhost:7177/api/Products';


  public getProductBySlug(slug: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${slug}`);
  }
  public getAllProductView(currentPageNumber?: number, pageSize?: number, sort?: string,typeSort? : string,search?:string,where?:string): Observable<any> {
    
    return this.http.get<TypeProducts[]>(`${this.baseUrl}?currentPageNumber=${currentPageNumber}&pageSize=${pageSize}&sort=${sort}&typeSort=${typeSort}
  `);
  }
  public getAllProduct(currentPageNumber?: number, pageSize?: number, sort?: string,typeSort? : string,search?:string,where?:string): Observable<any> {
    
    return this.http.get<TypeProducts[]>(`${this.baseUrl}?currentPageNumber=${currentPageNumber}&pageSize=${pageSize}&sort=${sort}&typeSort=${typeSort}
    &where=${where}&search=${search}`);
  }
  public UpdateViewCount(slug: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/UpdateViewCount?slug=${slug}`,null);
  }
  
}
