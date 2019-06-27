import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from'firebase';
import {DomSanitizer} from '@angular/platform-browser';
import { LoggedinPage } from '../loggedin/loggedin';
//import {DomSanitizationService} from '@angular/platform-browser/esm/src/security/dom_sanitization_service';

/**
 * Generated class for the StudymaterialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studymaterial',
  templateUrl: 'studymaterial.html',
})
export class StudymaterialPage {
  url:any;
  name:any;
  mats:any[];
  personid:any[];
  u:any;
  uls:any = [];
  vids:any = [];
  // sanitizer: DomSanitizationService;
 

  constructor(public navCtrl: NavController, public navParams: NavParams,public doms : DomSanitizer
    ) {
    // var id = firebase.auth().currentUser.uid;
    firebase.database().ref('orgusers/tctzLqHw96h9IVfppAmsyrRIDy13/materials').on('value',s=>{
      this.mats=[]
      this.uls = []

     
      
      s.forEach(snap=>{this.mats.push({name:snap.val().materialName,url:this.doms.bypassSecurityTrustResourceUrl(snap.val().url)})
      if( this.mats == null){
        alert("No videos uploaded yet!");
        this.navCtrl.setRoot(LoggedinPage);
      }
    })

    console.log(this.mats)
    })

    firebase.database().ref('orgusers/tctzLqHw96h9IVfppAmsyrRIDy13/videos').on('value',s=>{
      
      s.forEach(snap=>{this.vids.push({
        url:this.doms.bypassSecurityTrustResourceUrl(snap.val().vidUrl),
        name:snap.val().vidName
      })
      
    })
    })
  }
  /*cleanURL(u)
  {
    return this.sanitize.bypassSecurityTrustResourceUrl(u);
  }
   sanitize()
    {for(this.u in this.urls)
    return this.doms.bypassSecurityTrustUrl(this.u)
   }*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad StudymaterialPage');
  }

}
