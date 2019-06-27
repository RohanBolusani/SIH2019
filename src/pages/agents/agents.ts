import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BenefitsPage } from '../benefits/benefits';
import { ForumPage } from '../forum/forum';
import { ProcedurePage } from '../procedure/procedure';
import { ChathomePage } from '../chathome/chathome';
import { LiaPage } from '../lia/lia';

/**
 * Generated class for the AgentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agents',
  templateUrl: 'agents.html',
})
export class AgentsPage {

  lang:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate:TranslateService) {

    this.lang = 'en';
    this.translate.setDefaultLang('en');
    this.translate.use('en');

  }

  switchLanguage() {

    this.translate.use(this.lang);
  }



  
  openBenefitsPage(){
    this.navCtrl.push(BenefitsPage);
  }

  openForumPage(){
    this.navCtrl.push(ForumPage);
  }

  openProcedurePage(){
    this.navCtrl.push(ProcedurePage);
  }

  openLiaPage()
  {
    this.navCtrl.push(LiaPage);

  }
  discuss(){
    this.navCtrl.push(ChathomePage);
  }

}
