import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable()
export class AuthGuard implements CanActivate {
  user;
  constructor(private authService: AuthService, private router: Router,  private afAuth: AngularFireAuth ) {
    this.user = afAuth.user.subscribe( user => console.dir(this.user));
  }
  canActivate(): Observable<boolean> | boolean {
    /*return this.authService.user.pipe(
      map( user => {
        if (user.uid){
          console.log("user is true");
          return true;
        } else {
          this.router.navigate(['/home']);
          return false
        }
      })
    );*/
 return true;
  }
}
