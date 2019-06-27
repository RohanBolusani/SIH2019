import { from } from 'rxjs/observable/from';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { ChatPage } from '../chat/chat';
import { AgentsPage } from '../agents/agents';
import { ForumPage } from '../forum/forum';
import { ProcedurePage } from '../procedure/procedure';
import { database } from 'firebase';
import * as firebase from 'firebase';

@Component({
  selector: 'page-chathome',
  templateUrl: 'chathome.html',
})
export class ChathomePage {

    username: string = '';

  constructor(public navCtrl: NavController,
      private alertCtrl: AlertController) {

  }

    showAlert(title: string, message: string) {
      let alertBox = this.alertCtrl.create({
        title: title,
        subTitle: message,
        buttons: ['OK']
      });
      alertBox.present();
    }

    loginUser() {
      // let i=firebase.auth().currentUser.uid;
      // firebase.database().ref('user/').on('value',s=>{
      //   this.username=s.val().fname;
      // })
        if(/^[a-zA-Z0-9]+$/.test(this.username)) {
            // all cool
            this.navCtrl.push(ChatPage, {
                username: this.username
            });
        } else {
            this.showAlert('Error', 'Invalid Username');
        }
    }
    openAgentsPage(){
      this.navCtrl.push(AgentsPage);
    }
    openForumPage(){
      this.navCtrl.push(ForumPage);
    }
  
    openProcedurePage(){
      this.navCtrl.push(ProcedurePage);

}
}
