import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  baseUrl: string = "http://api.wunderground.com/api/54c6b038c99ad139/conditions/q/CA/San_Diego.json";
  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
  }
  getWeather() {
    return this.http.get(
      this.baseUrl);
    }
}

