import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the StyleProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class StyleProvider {
  token: any = {};
  baseUrl: string = "https://sum-17-final-phortonssf.c9users.io/api";
  path: string = "/Styles";
  constructor(public http: Http) {
    console.log('Hello StyleProvider Provider');
  }
  getStyles(token) {
    return this.http.get(
      this.baseUrl + this.path + "?access_token=" + token);
    }
  getStyleToday(temp, hairLength, token) {
    return this.http.get(
      this.baseUrl + this.path + "?filter[where][and][0][Weather]=" + temp + 
      "&filter[where][and][1][hairLength]=" + hairLength + 
      "&access_token=" + token);
  }
}
