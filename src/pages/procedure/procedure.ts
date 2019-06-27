import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgentsPage } from '../agents/agents';
import { ForumPage } from '../forum/forum';
import { ChathomePage } from '../chathome/chathome';
import { BenefitsPage } from '../benefits/benefits';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the ProcedurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-procedure',
  templateUrl: 'procedure.html',
})
export class ProcedurePage {

  lang:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public translate : TranslateService) {
    this.lang = 'en';
    this.translate.setDefaultLang('en');
    this.translate.use('en');



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
  discuss(){
    this.navCtrl.push(ChathomePage);
  }
  openBenefitsPage(){
    this.navCtrl.push(BenefitsPage);
  }

}
