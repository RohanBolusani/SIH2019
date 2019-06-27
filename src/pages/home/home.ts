import { ChathomePage } from './../chathome/chathome';
import { StudymaterialPage } from './../studymaterial/studymaterial';
import { ProcedurePage } from './../procedure/procedure';
import { ForumPage } from './../forum/forum';
import { BenefitsPage } from './../benefits/benefits';
import { AgentsPage } from './../agents/agents';
import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { OrgloginPage } from '../orglogin/orglogin';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lang:any;

  constructor(public navCtrl: NavController,public alertCtrl:AlertController, public translate : TranslateService) {

    this.lang = 'en';
    this.translate.setDefaultLang('en');
    this.translate.use('en');

  }

  switchLanguage() {

    this.translate.use(this.lang);
  }

signIn(){
this.navCtrl.push(LoginPage);
}
register(){
  this.navCtrl.push(RegisterPage);
}
orgsignIn(){
  this.navCtrl.push(OrgloginPage);
  }


  openAgentsPage(){
    this.navCtrl.push(AgentsPage);
  }

  goToMaterials()
{
  this.navCtrl.push(StudymaterialPage)
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
  // discuss(){
  //   this.navCtrl.push(ChathomePage);
  // }

}

