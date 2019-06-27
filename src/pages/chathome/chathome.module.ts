import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChathomePage } from './chathome';

@NgModule({
  declarations: [
    ChathomePage,
  ],
  imports: [
    IonicPageModule.forChild(ChathomePage),
  ],
})
export class ChathomePageModule {}
