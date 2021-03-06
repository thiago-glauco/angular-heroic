import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  user:Observable<firebase.User>
  userId;
  userEmail;

  constructor( private router: Router, private afAuth: AngularFireAuth ) {
    this.user = afAuth.authState;
    console.log("user is", this.user);
  }

  login(){
    this.afAuth.auth.signInWithPopup( new auth.GoogleAuthProvider())
      .then( (result) => { this.userId = result.user.uid;
        console.dir("success => " + JSON.stringify(result.user) )} )
      .catch( (error) => { console.dir("error => " + error)})
  }

  logout() {
    this.userId = "";
    this.afAuth.auth.signOut();
    this.router.navigate([`/home`]);
  }

}