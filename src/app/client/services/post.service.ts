import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { TypePosts } from '../types/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private http: HttpClient) { }
  private readonly baseUrl = 'https://localhost:7177/api/posts';

  // int currentPageNumber, int pageSize,
  //string sort, string dir, string where, string search
  public getAllpost(currentPageNumber?: number, pageSize?: number, sort?: string,typeSort? : string,search?:string,where?:string): Observable<any> {
    
    return this.http.get<TypePosts[]>(`${this.baseUrl}?currentPageNumber=${currentPageNumber}&pageSize=${pageSize}&sort=${sort}&typeSort=${typeSort}
    &where=${where}&search=${search}`);
  }
  public getAllpostView(currentPageNumber?: number, pageSize?: number, sort?: string,typeSort? : string): Observable<any> {
    
    return this.http.get<TypePosts[]>(`${this.baseUrl}?currentPageNumber=${currentPageNumber}&pageSize=${pageSize}&sort=${sort}&typeSort=${typeSort}
  `);
  }
  public getPostBySlug(slug: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${slug}`);
  }
}
