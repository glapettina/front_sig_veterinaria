import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../demo/service/auth.service';

@Injectable({
    providedIn: 'root'
})

export class userLogoutGuard implements CanActivate {
  constructor(
    private authService:AuthService,
    private router: Router
  ) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {

        if (!this.authService.isLogued()) {
            return true;
        }
        this.router.navigate(["/"]);
        return false;
    }


}
