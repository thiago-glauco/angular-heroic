import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>
  
  constructor( private router: Router, private afAuth: AngularFireAuth ) {
    this.user = afAuth.authState;
  }

  login(){
    this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider())
      .then( () => {
        console.log("loguedin")
        this.router.navigate([`/dashboard`])})
      .catch( error => console.log('authError => ', error))
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate([`/home`]);
  }

}