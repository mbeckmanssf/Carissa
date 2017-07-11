import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppUserProvider } from '../../providers/app-user/app-user'
import { StyleProvider } from '../../providers/style/style'

import { LandingPage } from '../../pages/landing/landing'

/**
 * Generated class for the StylePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 
@IonicPage()
@Component({
  selector: 'page-style',
  templateUrl: 'style.html',
})
export class StylePage {
  user: any;
  styleToday: any = {};
  hairLength: any;
  temp: any;
  weatherTemp: any;
  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public appUser: AppUserProvider,
  public styleProv: StyleProvider) {
    //styleProv.getStyles(window.localStorage.getItem("token"))
    console.log("get style");
    styleProv.getStyleToday(window.localStorage.getItem("weatherTemp"), window.localStorage.getItem("hairLength"), window.localStorage.getItem("token"))
    .map(res => res.json())
    .subscribe(res => {
      this.styleToday = res[0];
      window.localStorage.setItem("styleToday", res[0]);
      return console.log("style name: " + this.styleToday["Name"]);
    }, error => {
      alert("Styles could not be found, please try again.");
    });
    console.log("styles: " + this.styleToday)
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad StylePage');
  }
  logout() {
    this.appUser.logout(window.localStorage.getItem("token"));
    this.navCtrl.setRoot(LandingPage);
  }
}
