import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideostreamComponent } from './videostream/videostream.component';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgBufferingModule} from 'videogular2/compiled/buffering';
import { VgStreamingModule } from 'videogular2/compiled/streaming';



@NgModule({
  declarations: [VideostreamComponent],
  imports: [
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgBufferingModule,
    VgStreamingModule
  ],
  exports:[VideostreamComponent]
})
export class CommonfeatureModule { }
