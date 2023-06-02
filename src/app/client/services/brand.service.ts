import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TyBrand } from '../types/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = environment.apiUrl+'/Brand';

  public getAllBrand(): Observable<TyBrand[]> {
    return this.http.get<TyBrand[]>(`${this.baseUrl}`);
  }

}
