import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppUserProvider } from '../../providers/app-user/app-user'

import { LandingPage } from '../../pages/landing/landing'

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

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public appUser: AppUserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
  }
  logout() {
    this.appUser.logout(window.localStorage.getItem("token"));
    this.navCtrl.setRoot(LandingPage);
  }
}
