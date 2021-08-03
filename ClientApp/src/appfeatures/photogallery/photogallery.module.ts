import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotocollectionComponent } from './photocollection/photocollection.component';
import { ManagephotosComponent } from './managephotos/managephotos.component';



@NgModule({
  declarations: [PhotocollectionComponent, ManagephotosComponent],
  imports: [
    CommonModule
  ]
})
export class PhotogalleryModule { }
