import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypePostCategory } from '../types/postCategory';

@Injectable({
  providedIn: 'root'
})
export class PostCategoryService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = environment.apiUrl+'/PostCategory';

  public getAllPostCategory(): Observable<TypePostCategory[]> {
    return this.http.get<TypePostCategory[]>(`${this.baseUrl}`);
  }
}
