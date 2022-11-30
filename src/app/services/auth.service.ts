import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {}

  signin(user: string, password: string) {
    return this.auth.signInWithEmailAndPassword(
      user + '@empmgmtapp.web.app',
      password
    );
  }

  signout() {
    return this.auth.signOut();
  }
}
