import { ListPage } from './../list/list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
// import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase'; 
import { LoginPage } from '../login/login';
import { StudymaterialPage } from '../studymaterial/studymaterial';
import { CurrentprofilePage } from '../currentprofile/currentprofile';
import {DomSanitizer} from '@angular/platform-browser';
import { ChathomePage } from '../chathome/chathome';

//import { Camera,File,Entry } from 'ionic-native';
//declare var window:any;


/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {
  email:any;
  firstname:any;
  url:any;
  name:any;
  pp:any;
  dbtimer:number = 0
  ans:any = 0
  ansflag:boolean
  // public options={
  //   sourceType:Camera.PictureSourceType.SAVEDPHOTOALBUM,
  //   mediaType:Camera.MediaType.ALLMEDIA,
  //   destinationType:Camera.DestinationType.FILE_URI

  // }

  myFile:any;
  id:any;
  time:number
  timeInSeconds:number
  runTimer:boolean
  hasStarted:boolean
  hasFinished:boolean
  remainingTime:number
  displayTime:any
  limit:number = 20
  showstudy:boolean = true
  showtest:boolean = false
  surname:any
  fname:any
  achieve: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public doms : DomSanitizer,private loading:LoadingController) {
   
    var userId = firebase.auth().currentUser.uid;
    this.id=userId;
    let ld = this.loading.create({
      content:'Loading...',
      spinner:'ios'
    })
    ld.present();
    firebase.database().ref(`users/`+userId).once('value',onFill=>{
      console.log(onFill.val().fname);
      this.firstname=onFill.val().fname;
     
      ld.dismiss();
      
    })
    var id=firebase.auth().currentUser.uid;
    firebase.database().ref('users/'+id).once('value',s=>{
     this.pp=this.doms.bypassSecurityTrustResourceUrl(s.val().url);
     console.log(this.pp)
    })
    
    

  }
  noteImage1(event){
    this.myFile=event.target.files[0];
  }

  noteImage(event){
    this.myFile=event.target.files[0];
  }

  upload(){
    var id = firebase.auth().currentUser.uid;
    firebase.database().ref('users/'+id).once('value',snapshot=>{
      let imgURL=firebase.storage().ref('images/'+this.myFile.name).put(this.myFile).then(_=>{
        firebase.storage().ref('images/'+this.myFile.name).getDownloadURL().then(url=>{
          console.log(url)
          firebase.database().ref(`users/${id}`).update({
            url:url,
            imgName:this.myFile.name
          })
          // firebase.database().ref('users/'+id).update({
          //   surname:this.surname,
          //   fname:this.fname
          // })
        })
        firebase.database().ref('users/'+id).update({
          surname:this.surname,
          fname:this.fname,

        })
        let userId = firebase.auth().currentUser.uid;
        firebase.database().ref('users/'+userId).update({timer:this.remainingTime})
        
        .catch(e=>{
          console.log(e)
        })
      })
      })
      
      

  }

  discuss(){
    this.navCtrl.push(ChathomePage);
  }
  upload1(){
    var id = firebase.auth().currentUser.uid;
    firebase.database().ref('users/'+id).once('value',snapshot=>{
      let imgURL=firebase.storage().ref('achievements/'+this.myFile.name).put(this.myFile).then(_=>{
        firebase.storage().ref('achievements/'+this.myFile.name).getDownloadURL().then(url=>{
          console.log(url)
          firebase.database().ref(`users/${id}`).update({
            url2:url,
            ach:this.myFile.name
          })
          // firebase.database().ref('users/'+id).update({
          //   surname:this.surname,
          //   fname:this.fname
          // })
        })
        firebase.database().ref('users/'+id).update({
          achieve:this.achieve,

        })
        let userId = firebase.auth().currentUser.uid;
        firebase.database().ref('users/'+userId).update({timer:this.remainingTime})
        
        .catch(e=>{
          console.log(e)
        })
      })
      })
      
      

  }

  userProfile()
  {
   this.navCtrl.push(CurrentprofilePage,{data:this.id})
  }
  study(){
    this.navCtrl.push(StudymaterialPage)
  }

  logOut(){
    this.pauseTimer();
    let userId = firebase.auth().currentUser.uid;
    firebase.database().ref('users/'+userId).update({timer:this.remainingTime})
    this.navCtrl.setRoot(LoginPage);
  }

  ionViewDidLoad() {
  }
  myfun(){
    var id=firebase.auth().currentUser.uid;
    firebase.database().ref('users/'+id).once('value',s=>{
     this.pp=this.doms.bypassSecurityTrustResourceUrl(s.val().url);
     console.log(this.pp)
    })
    
  }
  ngOnInit() {
    let userId = firebase.auth().currentUser.uid;
    firebase.database().ref('users/'+userId).on('value',data =>{
     this.dbtimer = data.val().timer;
     console.log(this.dbtimer)
    })
    this.initTimer();
    this.startTimer();
    this.myfun();
  }

initTimer() {
  // Pomodoro is usually for 25 minutes
  var t
  let userId = firebase.auth().currentUser.uid;
  firebase.database().ref('users/'+userId).on('value',data =>{
    t = data.val().timer;
   })
   this.timeInSeconds = t;

  this.time = this.timeInSeconds;
  this.runTimer = false;
  this.hasStarted = false;
  this.hasFinished = false;
  this.remainingTime = this.timeInSeconds;
 this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
}

startTimer() {
 this.runTimer = true;
 this.hasStarted = true;
 this.timerTick();
}

pauseTimer() {
 this.runTimer = false;
}

resumeTimer() {
 this.startTimer();
}

timerTick() {
 setTimeout(() => {

   if (!this.runTimer) { return; }
   this.remainingTime++;
   this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
   if (this.remainingTime > 0) {
     this.timerTick();
   }
   else {
     this.hasFinished = true;
     if(this.hasFinished)
     {
       this.showstudy = false
       this.showtest = true
     }
   }
 }, 1000);
}

getSecondsAsDigitalClock(inputSeconds: number) {
 var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
 var hours = Math.floor(sec_num / 3600);
 var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
 var seconds = sec_num - (hours * 3600) - (minutes * 60);
 var hoursString = '';
 var minutesString = '';
 var secondsString = '';
 hoursString = (hours < 10) ? "0" + hours : hours.toString();
 minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
 secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
 return hoursString + ':' + minutesString + ':' + secondsString;
}

testp(){
  this.navCtrl.push(ListPage)
}

}
