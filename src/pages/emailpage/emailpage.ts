import { from } from 'rxjs/observable/from';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import * as emailjs from 'emailjs-com';


/**
 * Generated class for the EmailpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:"main",segment:"app"})
@Component({
  selector: 'page-emailpage',
  templateUrl: 'emailpage.html',
})
export class EmailpagePage {
  to_name:any
  from_name:any
  message_html:any


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailpagePage');
     emailjs.init('user_s9CKsYI2YQ6IHacy7E09w')
  }

  submit(){
    var key = this.navParams.get('data')
    firebase.database().ref('users/'+key).once('value',s=>{
    let temp ={to_name:s.val().fname,
              from_name:this.from_name,
              message_html:this.message_html,
              to:s.val().email};
     emailjs.send('default_service','template_elGcWjY0',temp)

    })

  }

}
