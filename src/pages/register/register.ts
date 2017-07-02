import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppUserProvider } from '../../providers/app-user/app-user'

import { LobbyPage } from '../../pages/lobby/lobby'

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user: any = {}
  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public appUser: AppUserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  signupForm(form) {
    if(form.invalid) {
      return alert("Please fill in all of the required fields.");
    }
    this.appUser.register(this.user)
      .map(res => res.json())
    .subscribe(res => {
      window.localStorage.setItem('token', res.token);
      window.localStorage.setItem('userId', res.id);
      this.navCtrl.setRoot(LobbyPage);
    }, error => {
      if(error === 404){
          return alert("Destination not found, please try again.")
        } else if(error === 422){
          return alert("That email is already registered, please login.");
        } else {
          return alert("An error has ocurred, please try again.");
        }
    });
  }
}
