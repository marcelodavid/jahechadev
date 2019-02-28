import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Login } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private fbAuth:AngularFireAuth) { }

  public loginWithEmailandPass(login: Login){
    this.fbAuth.auth.signInWithEmailAndPassword(
      login.email, 
      login.password
    ).then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    })
  }
}
