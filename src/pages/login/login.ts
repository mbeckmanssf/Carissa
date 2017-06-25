import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppUserProvider } from '../../providers/app-user/app-user'

import { LobbyPage } from '../../pages/lobby/lobby'

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: any = {}
  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public appUser: AppUserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(form) {
    console.log(form);
    if(form.invalid) {
      return alert("Please fill in all of the required fields.");
    }
  
    this.appUser.login(this.user)
    .map(res => res.json())
    .subscribe(res => {
      // handle successful responses and decide what happens next
      window.localStorage.setItem('token', res.id);
      window.localStorage.setItem('firstName', res.firstName);
        this.navCtrl.setRoot(LobbyPage);
    }, error => {
        // inform the user of any known problems that arose, otherwise give a generic failed message
        if(error === 404){
          return alert("Destination not found, please try again.")
        } else {
          return alert("An error has ocurred, please try again.");
        }
    });
  }
}
