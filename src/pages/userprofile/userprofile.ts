import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { OrgPage } from '../org/org';
import { EmailpagePage } from '../emailpage/emailpage';
/**
 * Generated class for the UserprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userprofile',
  templateUrl: 'userprofile.html',
})
export class UserprofilePage {
   name:any
   r:string
  pp: any;
  sname: any;
  email: any;
  skype: any;
  sky:any;

  userId:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public dom:DomSanitizer) {
  
     var id = this.navParams.get('data');
     this.userId=id;
    firebase.database().ref('users/'+id).once('value',s=>{
      this.name=s.val().fname;
      this.pp=s.val().url;
      this.email=s.val().email;
      this.sname=s.val().surname;
      //this.skype=this.dom.bypassSecurityTrustUrl(s.val().skypeId);
      this.skype =s.val().skypeld;
    
    })
    // this.r="skype:"+this.skype+"?Call";
    // this.sky=this.dom.bypassSecurityTrustUrl(this.r);
     // this.sky= this.r.toString();
  }


goToEmail()
{
  this.navCtrl.push(EmailpagePage,{data:this.userId})
}
  ionViewDidLoad() {
    //this.sky="skype:"+this.skype+"?Call";
    console.log(this.skype);
    // console.log('ionViewDidLoad UserprofilePage');
  }
  myfun(){
    var id = this.navParams.get('data');
    firebase.database().ref('users/'+id).on('value',s=>{
    this.skype="skype:"+s.val().skypeid+"?call";
    window.open(this.skype)

  })

  }

}
