import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder } from '@angular/forms';

import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registerGroup = this.fb.group({
    registerEmail: '',
    registerPassword: '',
  });

  loginGroup = this.fb.group({
    loginEmail: '',
    loginPassword: '',
  });

  constructor(private afAuth: AngularFireAuth,
              private fb: FormBuilder,
  ) { }

  ngOnInit() {
    console.log('this.afAuth.auth', this.afAuth.auth);
  }

  login() {
    const { loginEmail, loginPassword } =
      this.loginGroup.value;

    this.afAuth.auth
      .signInWithEmailAndPassword(
        loginEmail,
        loginPassword
      ).then(success => console.log(success))
      .catch(error => console.error(error));
  }

  register() {
    const { registerEmail, registerPassword } =
      this.registerGroup.value;

    this.afAuth.auth.setPersistence(auth.Auth.Persistence.LOCAL)
      .then(() => this.afAuth.auth
        .createUserWithEmailAndPassword(registerEmail, registerPassword))
      .then(success => console.log(success))
      .catch(error => console.error(error));
  }
}
