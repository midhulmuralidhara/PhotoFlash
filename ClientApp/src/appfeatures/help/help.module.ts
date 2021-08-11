import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';
import { CommonfeatureModule } from '../common/commonfeature.module';



@NgModule({
  declarations: [HelpComponent],
  imports: [
    CommonModule,CommonfeatureModule
  ]
})
export class HelpModule { }
