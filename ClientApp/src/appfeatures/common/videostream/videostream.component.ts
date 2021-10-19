import { Component, OnInit, ViewChild, Input } from '@angular/core';


@Component({
  selector: 'app-videostream',
  templateUrl: './videostream.component.html',
  styleUrls: ['./videostream.component.css']
})
export class VideostreamComponent implements OnInit {

 
  token:string = '2_HzU2I2DKGEly_NZcbCfGLg4F7mP2wgrgMZsH5LiaPWT';
  @Input() awsPath:any;
  title = 'angular-ivs';
  options ={
    sources: [{
      src: 'https://3d84a54ba40c.us-west-2.playback.live-video.net/api/video/v1/us-west-2.834277921230.channel.azSF1TXoUn0j.m3u8',
      //'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8',
      type: 'application/x-mpegURL',
      
    }],
    fluid: true,
    aspectRatio: '16:19',
    autoplay: false,
    controls: true,
} 
  

  constructor() { }

  ngOnInit(): void {
    this.options.sources[0].src= this.awsPath;
  }

}
