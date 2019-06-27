import { ListPage } from './../list/list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { LoggedinPage } from '../loggedin/loggedin';
import { ForumPage } from '../forum/forum';
import { FeedformPage } from '../feedform/feedform';


/**
 * Generated class for the CurrentprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-currentprofile',
  templateUrl: 'currentprofile.html',
})
export class CurrentprofilePage {
  name:any;
  pp:any;
  email:any;
  sname: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    var id = this.navParams.get('data');
    firebase.database().ref('users/'+id).once('value',s=>{
        this.name=s.val().fname;
        this.pp=s.val().url;
        this.email=s.val().email;
        this.sname=s.val().surname;
        console.log(this.pp)
    })
    
  }
  goToFeedForm()
  {
    this.navCtrl.push(FeedformPage);
  }

  popIt()
  {
    this.navCtrl.pop();
  }

  sets(){
    this.navCtrl.push(ListPage)
  }

}
