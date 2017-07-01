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
  style: any;
  //Hair_Length: any = window.localStorage.getItem("Hair_Length");
  //temp: any = window.localStorage.getItem("temp");
  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public appUser: AppUserProvider,
  public styleProv: StyleProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StylePage');
    console.log(window.localStorage.getItem("temp"))
    console.log(window.localStorage.getItem("Hair_Length"));
    /*
    this.styleProv.getStyle(window.localStorage.getItem("temp"), window.localStorage.getItem("Hair_Length"))
    .map(res => res.json())
    .subscribe(res => {
      this.style = res;
      console.log(res);
    }, error => {
      alert("Sorry, your information could not be retreived.  Please tray again later.");
    });
    */
  }
  logout() {
    this.appUser.logout(window.localStorage.getItem("token"));
    this.navCtrl.setRoot(LandingPage);
  }
}
