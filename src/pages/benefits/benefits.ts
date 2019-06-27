import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgentsPage } from '../agents/agents';
import { ForumPage } from '../forum/forum';
import { ProcedurePage } from '../procedure/procedure';
import { ChathomePage } from '../chathome/chathome';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the BenefitsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-benefits',
  templateUrl: 'benefits.html',
})
export class BenefitsPage {

  lang:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public translate : TranslateService) {

    this.lang = 'en';
    this.translate.setDefaultLang('en');
    this.translate.use('en');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BenefitsPage');
  }

  switchLanguage() {

    this.translate.use(this.lang);
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
  discuss(){
    this.navCtrl.push(ChathomePage);
  }
}
