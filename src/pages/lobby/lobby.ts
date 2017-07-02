import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppUserProvider } from '../../providers/app-user/app-user'

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
  userId: any;
  user: any;
  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public appUser: AppUserProvider) {
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
    this.appUser.getUserData(window.localStorage.getItem("token"))
    .map(res => res.json())
    .subscribe(res => {
      this.user = res;
      console.log(this.user);
      console.log(this.user.Hair_Length);
      window.localStorage.setItem('Hair_Length', this.user.Hair_Length);
    }, error => {
      alert("Sorry, your information could not be retreived.  Please tray again later.");
    });
    this.weather = window.localStorage.getItem("weather");
    this.displayTemp = window.localStorage.getItem("displayTemp");
    this.temp = window.localStorage.getItem("temp");
  }
  logout() {
    this.appUser.logout(window.localStorage.getItem("token"));
    this.navCtrl.setRoot(LandingPage);
  }
  toStyle() {
    this.navCtrl.push(StylePage);
  }
}
