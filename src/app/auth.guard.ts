import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './client/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private  authService : AuthService,private router:Router){}
  canActivate(): boolean {
    if (this.authService.isLoggedIn() && this.authService.hasValidToken()) {
      
      return true;
    } else {
      this.router.navigate(['/dang-nhap']);
      return false;
    }
  }
  
}
