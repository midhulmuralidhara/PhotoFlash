import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { VgHLS } from 'videogular2/compiled/src/streaming/vg-hls/vg-hls'; 


@Component({
  selector: 'app-videostream',
  templateUrl: './videostream.component.html',
  styleUrls: ['./videostream.component.css']
})
export class VideostreamComponent implements OnInit {

  @ViewChild(VgHLS) vgHls: VgHLS;
  token:string = '2_HzU2I2DKGEly_NZcbCfGLg4F7mP2wgrgMZsH5LiaPWT';
  @Input() awsPath:any;

  constructor() { }

  ngOnInit(): void {

  }

}
