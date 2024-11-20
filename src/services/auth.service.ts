import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService   
 {

  constructor(private afAuth: AngularFireAuth) {}

  login(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email,   
 password);
  }
}