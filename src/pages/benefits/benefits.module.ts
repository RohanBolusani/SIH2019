import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BenefitsPage } from './benefits';

@NgModule({
  declarations: [
    BenefitsPage,
  ],
  imports: [
    IonicPageModule.forChild(BenefitsPage),
  ],
})
export class BenefitsPageModule {}
