import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrgPage } from './org';

@NgModule({
  declarations: [
    OrgPage,
  ],
  imports: [
    IonicPageModule.forChild(OrgPage),
  ],
})
export class OrgPageModule {}
