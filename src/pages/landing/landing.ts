import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WeatherProvider } from '../../providers/weather/weather'

import { LoginPage } from '../login/login'
import { RegisterPage } from '../register/register'

/**
 * Generated class for the LandingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  data: any;
  weather: any;
  displayTemp: any;
  temp: any;
  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
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
      this.temp = this.data.current_observation.feelslike_f;
      if(this.temp > 70){
        window.localStorage.setItem("weatherTemp", "hot");
        return console.log(window.localStorage.getItem("weatherTemp"));
      } else if(this.temp < 50){
        window.localStorage.setItem("weatherTemp", "cold");
        return console.log(window.localStorage.getItem("weatherTemp"));
      } else{
        window.localStorage.setItem("weatherTemp", "average");
        return console.log(window.localStorage.getItem("weatherTemp"));
      };
    }, error => {
          return alert("An error has ocurred, please try again.");
        })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
    
  }
  
  login() {
    this.navCtrl.push(LoginPage);
  }
  register() {
    this.navCtrl.push(RegisterPage)
  }
}
