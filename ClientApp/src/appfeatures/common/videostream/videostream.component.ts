import { Component, OnInit, ViewChild } from '@angular/core';
import { VgHLS } from 'videogular2/compiled/src/streaming/vg-hls/vg-hls';

@Component({
  selector: 'app-videostream',
  templateUrl: './videostream.component.html',
  styleUrls: ['./videostream.component.css']
})
export class VideostreamComponent implements OnInit {

  @ViewChild(VgHLS) vgHls: VgHLS;

  constructor() { }

  ngOnInit(): void {

  }

}
