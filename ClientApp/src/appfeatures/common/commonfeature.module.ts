import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideostreamComponent } from './videostream/videostream.component';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';


@NgModule({
  declarations: [VideostreamComponent],
  imports: [
    CommonModule,
    VgCoreModule,
    VgControlsModule
  ],
  exports:[VideostreamComponent]
})
export class CommonfeatureModule { }
