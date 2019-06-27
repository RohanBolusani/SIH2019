import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiaPage } from './lia';

@NgModule({
  declarations: [
    LiaPage,
  ],
  imports: [
    IonicPageModule.forChild(LiaPage),
  ],
})
export class LiaPageModule {}
