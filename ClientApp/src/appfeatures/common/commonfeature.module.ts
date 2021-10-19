import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideostreamComponent } from './videostream/videostream.component';
import { SafePipe } from './safepipe';
import { NgIvsModule } from '@cotufa82/ng-ivs';



@NgModule({
  declarations: [VideostreamComponent, SafePipe],
  imports: [
    CommonModule,
    NgIvsModule
  ],
  exports:[VideostreamComponent, SafePipe]
})
export class CommonfeatureModule { }
