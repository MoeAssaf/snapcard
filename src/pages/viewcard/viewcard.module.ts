import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewcardPage } from './viewcard';

@NgModule({
  declarations: [
    ViewcardPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewcardPage),
  ],
})
export class ViewcardPageModule {}
