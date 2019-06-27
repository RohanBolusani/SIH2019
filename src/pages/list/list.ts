import { AnspaperPage } from './../anspaper/anspaper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Select, Loading, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';
import { from } from 'rxjs/observable/from';
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  noshow: boolean = true;
  selectedval:any;
  questions:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private Loading:LoadingController) {
  }

  ionViewDidLoad() {
    let l = this.Loading.create({
      content:'waiting...',
      spinner:'andriod'
    })
    l.present()
    firebase.database().ref(`orgusers/tctzLqHw96h9IVfppAmsyrRIDy13/questions/`).on('value',data=>{
      this.questions = [];
      let key = [];
      key = Object.keys(data.val());
      console.log(key)
      if(key){
      for(var k of key)
      {
        this.questions.push({key:k, name:data.val()[k]['questionPaper']})

      }
      l.dismiss()
      this.noshow=false;
    }
    else{
      console.log('no data')
    }
    })
  }

  selectedopt(value){  
   this.selectedval=value;
  }

  selectpaper(){
    this.navCtrl.push(AnspaperPage, { kval:this.selectedval
    });
  }

}
