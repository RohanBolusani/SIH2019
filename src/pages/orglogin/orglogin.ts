import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import   * as firebase from 'firebase'; 
import { OrgPage } from '../org/org';

/**
 * Generated class for the OrgloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orglogin',
  templateUrl: 'orglogin.html',
})
export class OrgloginPage {

   email:string;
  password:string;
  id:any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
alert(msg:string){
  this.alertCtrl.create({
    title: 'Alert',
    subTitle: msg,
    buttons: ['OK']
  }).present();

    }


    signIn()
    {
      firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(
       
        data=>{
          
          //console.log('got some data',this.firebase.auth().UserCredential);
          this.alert('Success!Logged in.');
          this.navCtrl.setRoot(OrgPage)
          //this.id=firebase.auth().currentUser.uid;
        }
      )
      // .catch(error=>{
      //   this.alert(error.message);
      // })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
      
      console.log('Signs In with',this.email,this.password);
    }    


}
