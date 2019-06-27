//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count } from 'rxjs/operators';

@Injectable()
export class CurrpageProvider {
  currentPage:any='';
  count:number=0
  constructor() {
    
  }
  funform(){
    this.count=1;
  }
  changeCurr(page:string){
    this.currentPage = page;
  }

}
