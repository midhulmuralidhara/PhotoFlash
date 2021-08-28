import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomescreenComponent } from './homescreen.component';
import { MenuNavigationComponent } from './menunavigation/menunavigation.component';



@NgModule({
  declarations: [HomescreenComponent,MenuNavigationComponent],
  imports: [
    CommonModule
  ]
})
export class HomescreenModule { }
