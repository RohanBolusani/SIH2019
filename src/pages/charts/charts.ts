import { count } from 'rxjs/operators';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import * as firebase from 'firebase';
import { ComponentsModule } from '../../components/components.module';

/**
 * Generated class for the ChartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html',
})
export class ChartsPage {
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  barChart: any;
  doughnutChart:any;
  lbl:any =[];
  lbld:any =[];
  duration:any = [];
  loc:any =[];
  a:any = []
  bgcolor:any = []
  bordercolor:any = []
  datab:any={}
  key:any={}
  count:number =0
  // counter:number[]

  ionViewDidLoad() {
    firebase.database().ref("users/").on('value',snapshot=>
    {
      this.lbl=[]
        snapshot.forEach(snap=>{this.lbl.push(snap.val().fname)

        })
      this.duration=[]
        snapshot.forEach(snap=>{this.duration.push(snap.val().timer)
          this.bgcolor.push('rgba(255, 99, 132, 0.2)')
          this.bordercolor.push('rgba(255,99,132,1)')

        })
        console.log(this.duration)
      })
      firebase.database().ref("users/").on('value',snapshot=>
      {
        this.loc=[]
          snapshot.forEach(s=>{
            this.loc.push(s.val().pincode)  
          })
          console.log(this.loc)
        this.key=[]
        snapshot.forEach(f=>{this.key.push(f.key)  
        })
          console.log(this.key)
        })

    // this.cluster();
    //console.log(this.counter)
    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
          labels: this.lbl,
          datasets: [{
              //label: '# of Votes',
              data: this.duration,
              backgroundColor:this.bgcolor,
              borderColor:this.bordercolor,
              borderWidth: 1.5
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }

  });

//   this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

//     type: 'doughnut',
//     data: {
//         labels: this.loc,
//         datasets: [{
//             //label: '# of Votes',
//             data: this.counter,
//             backgroundColor: [
//             ],
//             hoverBackgroundColor: [
//             ]
//         }]
//     }

// });

    console.log('ionViewDidLoad ChartsPage');
  }

  // cluster(){
  //   let i=0
  //   this.counter=[]
  //   firebase.database().ref('users/').on('value',s=>{
  //     s.forEach(snap=>{
  //       let l =snap.val().pincode
  //       console.log(l)
  //     this.loc.forEach(e=>{
  //       console.log(s.val())
  //       if(e==l)
  //       {
  //         this.counter.push(this.counter[i])
  //         i++
        
  //       }
  //       console.log(this.counter)
  //       //if(e.val())
  //     }) 
  //   })
  //   })
  // }

  // cluster(){
  //   let c:any=0
  //   let i:any=0
  //   this.counter=[]
  //   firebase.database().ref('users/').on('value',s=>{
  //     s.forEach( e=>{
  //       this.loc.forEach(l => {
  //         c=0
  //         if(l==e.val().pincode)
  //         {
  //          c++
  //         //  this.counter[i] = this.counter[i]+1
  //         this.counter.push(this.counter[i]+1)
  //          i++
  //         }
  //       });
  //     })
  //   })
  // }
}