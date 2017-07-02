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
 var styleOptions = [
{
  "Name": "Troll",
  "Description": "Separate top section of hair. Secure at top of head with elastic band.",
  "Hair_Length": "chin",
  "Hair_Weight": "all",
  "Hair_Type": "curly",
  "Weather": "average",
  "Day": "Weekend",
  "Link": "string",
  "id": "string"
},
{
  "Name": "Pig Tails",
  "Description": "Part hair down the middle and separate into two sections.  Braid each section and secure with elastic.",
  "Hair_Length": "shoulder",
  "Hair_Weight": "all",
  "Hair_Type": "all",
  "Weather": "average",
  "Day": "Weekend",
  "Link": "string",
  "id": "string"
},
{
  "Name": "Modern Hippie",
  "Description": "Part hair down the middle.",
  "Hair_Length": "long",
  "Hair_Weight": "all",
  "Hair_Type": "all",
  "Weather": "average",
  "Day": "Weekend",
  "Link": "string",
  "id": "string"
},
{
  "Name": "Schoolgirl Barrettes",
  "Description": "Separate front section of hair and split at part (middle or side).  Smooth sections with brush and secure to head with barrettes.",
  "Hair_Length": "chin",
  "Hair_Weight": "all",
  "Hair_Type": "straight, wavy",
  "Weather": "cold",
  "Day": "Weekend",
  "Link": "string",
  "id": "string"
},
{
  "Name": "Center Sleek",
  "Description": "Part hair down the middle.  Straighten with flat iron.",
  "Hair_Length": "shoulder",
  "Hair_Weight": "all",
  "Hair_Type": "all",
  "Weather": "cold",
  "Day": "Weekend",
  "Link": "string",
  "id": "string"
},
{
  "Name": "Space Princess",
  "Description": "Part Hair in center and separate.  Gather hair above ear and secure with elastic band.  Twist each section of hair around base and secure with another eleastic",
  "Hair_Length": "long",
  "Hair_Weight": "all",
  "Hair_Type": "curly",
  "Weather": "cold",
  "Day": "Weekend",
  "Link": "string",
  "id": "string"
},
{
  "Name": "Headband",
  "Description": "Part hair to the side and secure in place with headband.",
  "Hair_Length": "chin",
  "Hair_Weight": "all",
  "Hair_Type": "all",
  "Weather": "hot",
  "Day": "Weekend",
  "Link": "string",
  "id": "string"
},
{
  "Name": "Ponytail",
  "Description": "Brush hair to base of neck and gather in elastic band.",
  "Hair_Length": "shoulder",
  "Hair_Weight": "all",
  "Hair_Type": "all",
  "Weather": "hot",
  "Day": "Weekend",
  "Link": "string",
  "id": "string"
},
{
  "Name": "Bun",
  "Description": "Brush hair to top of head and gather in elastic band.  Twist hair and wrap around elastic.  Secure with second elastic.",
  "Hair_Length": "long",
  "Hair_Weight": "all",
  "Hair_Type": "all",
  "Weather": "hot",
  "Day": "Weekend",
  "Link": "string",
  "id": "string"
}
]
 
 
@IonicPage()
@Component({
  selector: 'page-style',
  templateUrl: 'style.html',
})
export class StylePage {
  user: any;
  styleToday: any = {};
  Hair_Length: any;
  temp: any;
  weatherTemp: any;
  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public appUser: AppUserProvider,
  public styleProv: StyleProvider) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StylePage');
    console.log(window.localStorage.getItem("weatherTemp"));
    this.weatherTemp = window.localStorage.getItem("weatherTemp");
    console.log(window.localStorage.getItem("Hair_Length"));
    this.Hair_Length = (window.localStorage.getItem("Hair_Length"));
    /*
    this.styleProv.getStyle(this.temp, this.Hair_Length)
    .map(res => res.json())
    .subscribe(res => {
      this.style = res;
      console.log(res);
    }, error => {
      alert("Sorry, your information could not be retreived.  Please tray again later.");
    });
    */
    
    for(let i = 0, ln = styleOptions.length; i < ln; i++){
      if(this.Hair_Length == styleOptions[i]["Hair_Length"]){
        if(this.weatherTemp == styleOptions[i]["Weather"]){
          this.styleToday = styleOptions[i];
        }
      }
    }
  }
  logout() {
    this.appUser.logout(window.localStorage.getItem("token"));
    this.navCtrl.setRoot(LandingPage);
  }
}
