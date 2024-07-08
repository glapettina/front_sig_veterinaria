import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../demo/service/auth.service';

@Injectable({
    providedIn: 'root'
})

export class userLoguedGuard implements CanActivate {
  constructor(
    private authService:AuthService,
    private router: Router
  ) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {

        if (this.authService.isLogued()) {
            return true;
        }
        this.router.navigate(["auth/login"]);
        return false;
    }


}
