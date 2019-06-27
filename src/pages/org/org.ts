import { ChartsPage } from './../charts/charts';
import { QpaperPage } from './../qpaper/qpaper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase'; 
import { HomePage } from '../home/home';
import { MaterialPage } from '../material/material';
import { UserprofilePage } from '../userprofile/userprofile';
import { inspectNativeElement } from '@angular/platform-browser/src/dom/debug/ng_probe';


@IonicPage()
@Component({
  selector: 'page-loggedin',
  templateUrl: 'org.html',
})
export class OrgPage {
  email:any;
  key: any;
  fname:any;
  surname:any;
  firstname:any;
  submit:any;
  id:any[];
  //personids: any[];
   personid: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    function snapshotToArray(snapshot){

    var returnArr =[]
     snapshot.forEach(function(childsnapshot)
     {
        var item = childsnapshot.val();
        item.key=childsnapshot.key;

        returnArr.push(item);
     })

       return returnArr;

   }
    
                 

   firebase.database().ref("users/").on('value',snapshot=>
    {
      this.personid=[]
      this.id=[]
        snapshot.forEach(snap=>{this.personid.push(


                     {


                                key : snap.key,
                                email : snap.val().email,
                                fname : snap.val().fname,
                                surname : snap.val().surname,
                                timer: snap.val().timer,
                                submit:snap.val().submitted

                     }

          )
        this.priority(this.personid)
        })

   })
        
      
}


  priority(pid){
    pid.sort(function(a, b){
      var A=a.timer,B=b.timer
      return B-A 
  })
  console.log(pid)
  }

  viewProfile(per){
    this.navCtrl.push(UserprofilePage,{data:per.key});
  }

  uploadQs(){
    this.navCtrl.push(QpaperPage)
  }

  uploadMaterial(){
    this.navCtrl.push(MaterialPage)
  }

   
  logOut(){
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
  }

  stat(){
    this.navCtrl.push(ChartsPage);
  }

}
 