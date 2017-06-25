import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppUserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AppUserProvider {
  baseUrl: string = "https://sum-17-final-phortonssf.c9users.io/api";
  path: string = "/AppUsers";
  loginPath: string = "/login";
  constructor(public http: Http) {
    console.log('Hello AppUserProvider Provider');
  }
  register(newUserData) {
    return this.http.post(
      this.baseUrl + this.path,
      newUserData
    );
  }
  login(loginUserData) {
    return this.http.post(
      this.baseUrl + this.path + this.loginPath,
      loginUserData
    );
  }
  logout(token) {
    return this.http.post(
      this.baseUrl + this.path + '/logout' + '?access_token=' + token, 
      {}
    );
  }
}
