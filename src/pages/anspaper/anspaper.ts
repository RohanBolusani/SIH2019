import { LoginPage } from './../login/login';
import { LoggedinPage } from './../loggedin/loggedin';
import { CurrentprofilePage } from './../currentprofile/currentprofile';
import { Component,ViewChild } from '@angular/core';
import { DataProvider } from './../../providers/data/data';
import { IonicPage, NavController, NavParams, LoadingController, Loading, Spinner } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-anspaper',
  templateUrl: 'anspaper.html',
  providers:[DataProvider]
})
export class AnspaperPage {

  @ViewChild('slides') slides: any;

    hasAnswered: boolean = false;
    score: number = 0;
    paper:any;
    slideOptions: any;
    questions = [];
    showStart:boolean = false;
    kval:any;

  constructor(public navCtrl: NavController, public dataService: DataProvider, public NavParams:NavParams, private loading:LoadingController) {
    this.kval = NavParams.get('kval')

}

  ionViewDidLoad() {
    let l = this.loading.create({
      content:'waiting...',
      spinner:'andriod'
        })
        l.present()
    firebase.database().ref(`orgusers/tctzLqHw96h9IVfppAmsyrRIDy13/questions/`).on('value',data=>{
      let temp = data.val();
      let key = Object.keys(data.val())
      if(temp)
      {
      this.questions = data.val()[this.kval]['questions']
      }
      else{
        console.log('no questions')
      }
      console.log(this.paper)
      console.log(this.questions)
      l.dismiss()
      this.showStart = true;
  })

  }
  
  nextSlide(){
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
}

selectAnswer(answer, question){

    this.hasAnswered = true;
    answer.selected = true;
    question.flashCardFlipped = true;
    if(answer.correct == 'true'){
        this.score++;
    }

    setTimeout(() => {
        this.hasAnswered = false;
        this.nextSlide();
        answer.selected = false;
        question.flashCardFlipped = false;
    }, 3000);
}

randomizeAnswers(rawAnswers: any[]): any[] {

    for (let i = rawAnswers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = rawAnswers[i];
        rawAnswers[i] = rawAnswers[j];
        rawAnswers[j] = temp;
    }

    return rawAnswers;

}

restartQuiz() {
    this.score = 0;
    this.slides.lockSwipes(false);
    this.slides.slideTo(1, 1000);
    this.slides.lockSwipes(true);
}

submitQuiz(){
  let id = firebase.auth().currentUser.uid;
  firebase.database().ref('users/'+id).update({score:this.score})
  firebase.database().ref('users/'+id).update({timer:0})
  this.navCtrl.setRoot(LoggedinPage,{
    ansflag:true
  });
}

}
