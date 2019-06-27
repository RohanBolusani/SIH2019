import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { LoginPage } from '../login/login';
import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  email:string;
  password:string;
  fname:string;
  surname:string;
  lang:any;

  constructor(public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams, public translate : TranslateService) {
    this.lang = 'en';
    this.translate.setDefaultLang('en');
    this.translate.use('en');



  }
  switchLanguage() {

    this.translate.use(this.lang);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(msg:string){
    this.alertCtrl.create({
      title: 'Hey!',
      subTitle: msg,
      buttons: ['OK']
    }).present();
  
      }

  register()
  {
    if(this.email===''&&this.password===''){console.log('Enter all the details!');}
    firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(data=>{
    console.log('Registers data',data);
    firebase.database().ref(`users/${data.user.uid}`).set({
      fname:this.fname,
      email:this.email,
      surname:this.surname
    })
    //this.alert("Congratulations,you're a registered user now.");
    this.navCtrl.Forward('/home
    ');
  })
  .catch(error=>{
    // console.log('ERROR',error);
    this.alert(error.message);
  });

}
}
