import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';
import { StudymaterialPage } from '../studymaterial/studymaterial';
import { CurrpageProvider } from '../../providers/currpage/currpage';
import { LoggedinPage } from '../loggedin/loggedin';

/**
 * Generated class for the AppformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appform',
  templateUrl: 'appform.html',
})
export class AppformPage {
  id:any;
  phone:any;
  address:any;
  pincode:any;
  city:any;
  state:any;
  aadno:any;
  skypeId:any;
  gender:any;
  category:any;
  count:any;
  submitted:any;
  constructor(private curr:CurrpageProvider,private loading:LoadingController,public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams) {
    this.id=firebase.auth().currentUser.uid;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppformPage');
  }
  alert(msg:string){
    this.alertCtrl.create({
      title: 'Hey!',
      subTitle: msg,
      buttons: ['OK']
    }).present();
  
      }
  sendAppForm()
  {
    let ld = this.loading.create({
      content:'Logging in...',
      spinner:'ios'
    })
    ld.present()
    firebase.database().ref(`users/`+this.id).update({
    phone:this.phone,
    address:this.address,
    pincode:this.pincode,
    city:this.city,
    state:this.state, 
    aadno:this.aadno,
    skypeId:this.skypeId,
    gender:this.gender,
    category:this.category,     
    submitted:true
    })
    this.curr.funform();
  
    ld.dismiss()
    this.alert("You have now applied.Study well.");
    let c =firebase.auth().currentUser.uid;
    firebase.database().ref('users/'+c).update({timer:0})
    
    this.navCtrl.setRoot(LoggedinPage);

  
  }

  }

  


