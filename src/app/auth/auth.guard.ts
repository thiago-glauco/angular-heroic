import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }
  canActivate(): Observable<boolean> {
    return this.authService.user.pipe(
      map( user => {
        if (user && user.uid){
          return true;
        } else {
          this.router.navigate([`/home`]);
          return false
        }
      })
    )
  }
}
