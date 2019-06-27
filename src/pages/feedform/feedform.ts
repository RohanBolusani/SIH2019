import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the FeedformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedform',
  templateUrl: 'feedform.html',
})
export class FeedformPage {
  feedback: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedformPage');
  }
  submitFeed()
  {
    var id=firebase.auth().currentUser.uid;
    firebase.database().ref('users/'+id).update({
      fsubmit:'true',
      feedback:this.feedback
    })
  
  }
}
