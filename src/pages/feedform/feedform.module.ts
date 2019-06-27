import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedformPage } from './feedform';

@NgModule({
  declarations: [
    FeedformPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedformPage),
  ],
})
export class FeedformPageModule {}
