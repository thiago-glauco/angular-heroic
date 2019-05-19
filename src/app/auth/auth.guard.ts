import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }
  canActivate(): Observable<boolean> | boolean {
    return this.authService.user.pipe(
      map( user => {
        if (user.uid){
          console.log("user is true");
          return true;
        } else {
          this.router.navigate(['/home']);
          return false
        }
      })
    );
    //return false;
  }
}
