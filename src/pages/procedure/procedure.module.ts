import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProcedurePage } from './procedure';

@NgModule({
  declarations: [
    ProcedurePage,
  ],
  imports: [
    IonicPageModule.forChild(ProcedurePage),
  ],
})
export class ProcedurePageModule {}
