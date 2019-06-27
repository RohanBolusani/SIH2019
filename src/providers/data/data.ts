import { from } from 'rxjs/observable/from';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DataProvider {

    data: any;
    constructor(public http: Http, private db:AngularFireDatabase) {

    }

    load(){
        // if(this.data){
        //     return Promise.resolve(this.data);
        // }

        // return new Promise(resolve => {
        //     this.http.get('https://test-202d8.firebaseio.com/questions.json').map(res => res.json()).subscribe(data => {
        //         this.data = data.question;
        //         resolve(this.data);
        //     });

        // });
        if(this.data || this.data!=undefined){
            return this.data
        }
        else{
           return this.http.get('https://sihfinal-39774.firebaseio.com/orgusers/oBrbJ6bvV6YMywczzYssPzKlgSf1/questions.json');
        }

    }

}