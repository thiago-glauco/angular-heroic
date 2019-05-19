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
    
  }
  canActivate(): Observable<boolean> | boolean {
    if( this.authService.userId ){
      console.log(this.authService.userId)
      return true
    }
    else {
      console.log(this.authService.userId)
      return false
    }
  }
}
