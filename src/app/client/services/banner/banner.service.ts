import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BannerService {


  constructor(private http: HttpClient) { }
  private readonly baseUrl = 'https://localhost:7164/api/Sliders';


}
