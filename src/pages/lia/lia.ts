import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BenefitsPage } from '../benefits/benefits';
import { ForumPage } from '../forum/forum';
import { ProcedurePage } from '../procedure/procedure';
import { ChathomePage } from '../chathome/chathome';
import { AgentsPage } from '../agents/agents';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the LiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lia',
  templateUrl: 'lia.html',
})
export class LiaPage {

  lang:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate : TranslateService) {
    this.lang = 'en';
    this.translate.setDefaultLang('en');
    this.translate.use('en');

}


  ionViewDidLoad() {
    console.log('ionViewDidLoad LiaPage');
  }
  openBenefitsPage(){
    this.navCtrl.push(BenefitsPage);
  }

  switchLanguage() {

    this.translate.use(this.lang);
  }

  openForumPage(){
    this.navCtrl.push(ForumPage);
  }

  openProcedurePage(){
    this.navCtrl.push(ProcedurePage);
  }
  discuss(){
    this.navCtrl.push(ChathomePage);
  }
  openAgentsPage(){
    this.navCtrl.push(AgentsPage);
  }

}
