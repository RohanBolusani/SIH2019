import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the QpaperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qpaper',
  templateUrl: 'qpaper.html',
})
export class QpaperPage {
  paperName:any
  questionText:any;
  setno:any;
  opt1 = {text:'',ans:''}
  opt2 = {text:'',ans:''}
  opt3 = {text:'',ans:''}
  questions:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  nextQues(){
    let ques = {
      questionText:this.questionText,
      answers:[
        {answer:this.opt1.text,correct:this.opt1.ans,selected:false},
        {answer:this.opt2.text,correct:this.opt2.ans,selected:false},
        {answer:this.opt3.text,correct:this.opt3.ans,selected:false}
      ],
    }
    this.questions.push(ques)
    console.log(this.questions)
    this.questionText = ''
    this.opt1.text = ''
    this.opt1.ans = ''
    this.opt2.text = ''
    this.opt2.ans = ''
    this.opt3.text = ''
    this.opt3.ans = ''

  }

  submit(){
    let qts = {
      questionPaper:this.setno,
      questions:this.questions,
  }
    console.log(qts)
    firebase.database().ref(`orgusers/tctzLqHw96h9IVfppAmsyrRIDy13/questions/`).push(qts)

  }

}
