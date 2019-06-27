import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { ProcedurePage } from './../procedure/procedure';

import { BenefitsPage } from './../benefits/benefits';
import { AgentsPage } from './../agents/agents';

/**
 * Generated class for the ForumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {
  feedback:any;
  user: any;
  personid: any[];
  fsubmitted:any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    firebase.database().ref("users/").on('value',snapshot=>
    {
      this.personid=[]

        snapshot.forEach(snap=>{this.personid.push(


                     {


                                key : snap.key,
                                email : snap.val().email,
                                fname : snap.val().fname,
                                surname : snap.val().surname,
                                feedback: snap.val().feedback,
                                fsubmitted: snap.val().fsubmit

                     }

          )


        })


   })


  }

  openBenefitsPage(){
    this.navCtrl.push(BenefitsPage);
  }

  

  openProcedurePage(){
    this.navCtrl.push(ProcedurePage);
  }
  openAgentsPage(){
    this.navCtrl.push(AgentsPage);
  }



}