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
 
 //styles
 /*var styleOptions = [
{
  "Name": "Troll",
  "Description": "Separate top section of hair. Secure at top of head with elastic band.",
  "hairLength": "chin",
  "hairWeight": "all",
  "hairType": "curly",
  "Weather": "average",
  "Day": "Weekend",
  "Link": "string",
  "id": "string"
},
{
  "Name": "Pig Tails",
  "Description": "Part hair down the middle and separate into two sections.  Braid each section and secure with elastic.",
  "hairLength": "shoulder",
  "hairWeight": "all",
  "hairType": "all",
  "Weather": "average",
  "Day": "Weekend",
  "Link": "string",
  "id": "string"
},
{
  "Name": "Modern Hippie",
  "Description": "Part hair down the middle.",
  "hairLength": "long",
  "hairWeight": "all",
  "hairType": "all",
  "Weather": "average",
  "Day": "Weekend",
  "Link": "string",
  "id": "string"
},
{
  "Name": "Schoolgirl Barrettes",
  "Description": "Separate front section of hair and split at part (middle or side).  Smooth sections with brush and secure to head with barrettes.",
  "hairLength": "chin",
  "hairWeight": "all",
  "hairType": "straight, wavy",
  "Weather": "cold",
  "Day": "Weekend",
  "Link": "string",
  "id": "string"
},
{
  "Name": "Center Sleek",
  "Description": "Part hair down the middle.  Straighten with flat iron.",
  "hairLength": "shoulder",
  "hairWeight": "all",
  "hairType": "all",
  "Weather": "cold",
  "Day": "Weekend",
  "Link": "string",
  "id": "string"
},
{
  "Name": "Space Princess",
  "Description": "Part Hair in center and separate.  Gather hair above ear and secure with elastic band.  Twist each section of hair around base and secure with another eleastic",
  "hairLength": "long",
  "hairWeight": "all",
  "hairType": "curly",
  "Weather": "cold",
  "Day": "Weekend",
  "Link": "string",
  "id": "string"
},
{
  "Name": "Headband",
  "Description": "Part hair to the side and secure in place with headband.",
  "hairLength": "chin",
  "hairWeight": "all",
  "hairType": "all",
  "Weather": "hot",
  "Day": "Weekend",
  "Link": "string",
  "id": "string"
},
{
  "Name": "Ponytail",
  "Description": "Brush hair to base of neck and gather in elastic band.",
  "hairLength": "shoulder",
  "hairWeight": "all",
  "hairType": "all",
  "Weather": "hot",
  "Day": "Weekend",
  "Link": "string",
  "id": "string"
},
{
  "Name": "Bun",
  "Description": "Brush hair to top of head and gather in elastic band.  Twist hair and wrap around elastic.  Secure with second elastic.",
  "hairLength": "long",
  "hairWeight": "all",
  "hairType": "all",
  "Weather": "hot",
  "Day": "Weekend",
  "Link": "string",
  "id": "string"
}
]
 */
 
@IonicPage()
@Component({
  selector: 'page-style',
  templateUrl: 'style.html',
})
export class StylePage {
  apiStyles: any = [];
  user: any;
  styleToday: any = {};
  hairLength: any;
  temp: any;
  weatherTemp: any;
  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public appUser: AppUserProvider,
  public styleProv: StyleProvider) {
    styleProv.getStyles(window.localStorage.getItem("token"))
    .map(res => res.json())
    .subscribe(res => {
      console.log("reponse: " + res);
      this.apiStyles = res;
    }, error => {
      alert("Styles could not be found, please try again.");
    });
    console.log("styles: " + this.apiStyles)
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad StylePage');
    //set and confirm temperature from weather api
    console.log(window.localStorage.getItem("weatherTemp"));
    this.weatherTemp = window.localStorage.getItem("weatherTemp");
    //set and confirm hair length from user info
    console.log(window.localStorage.getItem("hairLength"));
    this.hairLength = (window.localStorage.getItem("hairLength"));
    
    for(let i = 0, ln = this.apiStyles.length; i < ln; i++){
      if(this.hairLength == this.apiStyles[i]["hairLength"]){
        if(this.weatherTemp == this.apiStyles[i]["Weather"]){
          this.styleToday = this.apiStyles[i];
        }
      }
    }
  }
  logout() {
    this.appUser.logout(window.localStorage.getItem("token"));
    this.navCtrl.setRoot(LandingPage);
  }
}
