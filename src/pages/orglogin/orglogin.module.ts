import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrgloginPage } from './orglogin';

@NgModule({
  declarations: [
    OrgloginPage,
  ],
  imports: [
    IonicPageModule.forChild(OrgloginPage),
  ],
})
export class OrgloginPageModule {}
