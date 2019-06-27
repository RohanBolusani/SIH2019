import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
* Generated class for the ChatPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
//@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  username: string = '';
  message: string = '';
  _chatSubscription;
  messages: object[] = [];

  constructor(public db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
      this.username = this.navParams.get('username');
      this._chatSubscription = this.db.list('/chat').valueChanges().subscribe( data => {
        this.messages = data;
      });
    }

    sendMessage() {
      this.db.list('/chat').push({
        username: this.username,
        message: this.message
      }).then( () => {
        // message is sent
      }).catch( () => {
        // some error. maybe firebase is unreachable
      });
      this.message = '';
    }

    ionViewDidLoad() {
      this.db.list('/chat').push({
        specialMessage: true,
        message: `${this.username} has joined the room`
      });
    }

    ionViewWillLeave(){
      this._chatSubscription.unsubscribe();
      this.db.list('/chat').push({
        specialMessage: true,
        message: `${this.username} has left the room`
      });
    }
  }
