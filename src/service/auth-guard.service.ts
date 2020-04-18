import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router'
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.isAuthenticated()
      .then(isLoggedIn => {
        if (isLoggedIn) return true

        this.router.navigate(['/'])
      })
  }

}
