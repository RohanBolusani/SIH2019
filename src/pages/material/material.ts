import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase'; 

/**
 * Generated class for the MaterialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-material',
  templateUrl: 'material.html',
})
export class MaterialPage {
  materials:any[];
  myFile:any;
  url:any;
  name:any;
  urls:any[];
  personid:any[];
  videoUrl:any='';
  videoName:any = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   

  
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialPage');
  }
  noteMaterial(event){
    this.myFile=event.target.files[0];
  }
  
  upload(){
    var id = firebase.auth().currentUser.uid;
    firebase.database().ref('orgusers/'+id).once('value',snapshot=>{
      let matURL=firebase.storage().ref('materials/'+this.myFile.name).put(this.myFile).then(_=>{
        firebase.storage().ref('materials/'+this.myFile.name).getDownloadURL().then(url=>{
          console.log(url)
          firebase.database().ref(`orgusers/${id}/materials`).push({
            url:url,
            materialName:this.myFile.name
          })
        })
        .catch(e=>{
          console.log(e)
        })
      })
      })
      
      
  
  }

  uploadVid(){
    if(this.videoUrl == ''){
      alert("Empty Url")
    }else{
      var id = firebase.auth().currentUser.uid;
      firebase.database().ref(`orgusers/${id}/videos`).push({
        vidName:this.videoName,
        vidUrl:this.videoUrl
      })
    }
  }
}
