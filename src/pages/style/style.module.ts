import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StylePage } from './style';

@NgModule({
  declarations: [
    StylePage,
  ],
  imports: [
    IonicPageModule.forChild(StylePage),
  ],
  exports: [
    StylePage
  ]
})
export class StylePageModule {}
