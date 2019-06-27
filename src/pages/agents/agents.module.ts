import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentsPage } from './agents';

@NgModule({
  declarations: [
    AgentsPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentsPage),
  ],
})
export class AgentsPageModule {}
