import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QpaperPage } from './qpaper';

@NgModule({
  declarations: [
    QpaperPage,
  ],
  imports: [
    IonicPageModule.forChild(QpaperPage),
  ],
})
export class QpaperPageModule {}
