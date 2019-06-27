import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, LoadingController } from 'ionic-angular';
//import { AngularFireAuth } from '@angular/fire/auth';
import   * as firebase from 'firebase'; 
import { LoggedinPage } from '../loggedin/loggedin';
import { CurrpageProvider } from '../../providers/currpage/currpage';
import { AppformPage } from '../appform/appform';
import { TranslateService } from '@ngx-translate/core';
//import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  //user : Observable<firebase.User>;
  email:string;
  password:string;
  lang:any;

  constructor(private loading:LoadingController,private curr:CurrpageProvider,
    public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController, public translate : TranslateService) {
      this.lang = 'en';
      this.translate.setDefaultLang('en');
      this.translate.use('en');
  
  }

  switchLanguage() {

    this.translate.use(this.lang);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
    alert(msg:string){
    this.alertCtrl.create({
    title: 'Alert',
    subTitle: msg,
    buttons: ['OK']
  })
    }

    


    signIn()
    {
      let ld = this.loading.create({
        content:'Logging in...',
        spinner:'ios'
      })
      ld.present();
      firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(
       
        data=>{
          //console.log('got some data',this.firebase.auth().UserCredential);
          var id=firebase.auth().currentUser.uid;
          firebase.database().ref('users/'+id).on('value',s=>{
            console.log(s.val()['submitted']);
            if(s.val()['submitted']){
              this.navCtrl.setRoot(LoggedinPage)
              ld.dismiss();
            }
            else
            {
              let i =firebase.auth().currentUser.uid;
              firebase.database().ref('users/'+i).update({
                timer:0
              })
              this.navCtrl.setRoot(AppformPage)
              ld.dismiss();
            }

          })
          // this.curr.changeCurr('LoggedinPage')
        }
      ).catch(function(error) {
        ld.dismiss();
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
