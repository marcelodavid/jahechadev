import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Login } from '../interfaces/login.interface';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private fbAuth:AngularFireAuth) { }

  public loginWithEmailandPass(login: Login){
    return this.fbAuth.auth.signInWithEmailAndPassword(
      login.email, 
      login.password
    )
  }

  public loginWithFacebook(){
    return this.fbAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider());
  }

  public loginWithGoogle(){
    return this.fbAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider());
  }
}
