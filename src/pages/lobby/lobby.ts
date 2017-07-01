import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppUserProvider } from '../../providers/app-user/app-user'
import { WeatherProvider } from '../../providers/weather/weather'

import { LandingPage } from '../../pages/landing/landing'
import { StylePage } from '../../pages/style/style'

/**
 * Generated class for the LobbyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})
export class LobbyPage {
  today: any = new Date().toISOString();
  data: any;
  weather: any;
  displayTemp: any;
  temp: any;
  user: any;
  Hair_Length: any;
  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public appUser: AppUserProvider,
  public weatherProv: WeatherProvider) {
  weatherProv.getWeather()
    .map(res => res.json())
    .subscribe(res => {
      this.data = res
      console.log(this.data.current_observation.weather);
      console.log(this.data.current_observation.temperature_string);
      console.log(this.data.current_observation.feelslike_f);
      window.localStorage.setItem('weather', this.data.current_observation.weather);
      window.localStorage.setItem('displayTemp', this.data.current_observation.temperature_string);
      window.localStorage.setItem('temp', this.data.current_observation.feelslike_f);
    }, error => {
          return alert("An error has ocurred, please try again.");
        })
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
    this.weather = window.localStorage.getItem("weather");
    this.displayTemp = window.localStorage.getItem("displayTemp");
    this.temp = window.localStorage.getItem("temp");
  }
  logout() {
    this.appUser.logout(window.localStorage.getItem("token"));
    this.navCtrl.setRoot(LandingPage);
  }
  toStyle() {
    this.appUser.getUserData(window.localStorage.getItem("token"))
    .map(res => res.json())
    .subscribe(res => {
      console.log(res);
      this.user = res;
      console.log(this.user.Hair_Length);
      window.localStorage.setItem('Hair_Length', this.user.Hair_Length);
    }, error => {
      alert("Sorry, your information could not be retreived.  Please tray again later.");
    });
    this.navCtrl.push(StylePage);
  }
}
