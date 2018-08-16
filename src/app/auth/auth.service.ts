import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  loggedin = false;

  isAuthanticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedin);
      }, 0);
    });
    return promise;
  }

  loggedIn() {
    this.loggedin = true;
  }

  loggedOut() {
    this.loggedin = false;
  }
}
